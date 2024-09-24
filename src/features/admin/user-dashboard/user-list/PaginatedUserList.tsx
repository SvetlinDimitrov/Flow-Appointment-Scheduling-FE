import {Box, Paper, Table, TableContainer} from '@mui/material';
import {User, UserRole} from "../../../../shared/models/user.types.ts";
import LoadingSpinner from "../../../../shared/core/loading/main-loader/LoadingSpinner.tsx";
import PageNotFound from "../../../../shared/core/not-found/PageNotFound.tsx";
import useInfiniteUsersByRole from "../../../../hooks/users/query/useInfiniteUsersByRole.ts";
import {useContext, useEffect, useRef, useState} from 'react';
import SearchAndSortBar from "./SearchAndSortBar.tsx";
import TableHeadUsers from "./table-head/TableHeadUsers.tsx";
import TableBodyUsers from "./table-body/TableBodyUsers.tsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import {UserAuthContext} from "../../../../shared/context/UserAuthContext.tsx";

interface PaginatedUserSectionProps {
  title: string;
  userRole: UserRole;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onAssignToService: (user: User) => void;
  onViewAppointments: (user: User) => void;
}

interface Sort {
  realName: string | null;
  column: string | null;
  type: string | null;
}
//TODO: fix the pagination disappearing when any sort is applied
const PaginatedUserSection = (
  {
    userRole,
    onEdit,
    onDelete,
    onAssignToService,
    onViewAppointments
  }: PaginatedUserSectionProps) => {
  const {userId} = useContext(UserAuthContext)!;

  const [sort, setSort] = useState<Sort>({
    realName: null,
    column: null,
    type: null,
  });
  const [search, setSearch] = useState('');

  const sortString = sort.realName ? `${sort.realName},${sort.type}` : '';

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteUsersByRole(0, 10, userRole, sortString, search);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        const {scrollTop, scrollHeight, clientHeight} = tableContainerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 5 && hasNextPage) {
          fetchNextPage();
        }
      }
    };

    const tableContainerElement = tableContainerRef.current;
    tableContainerElement?.addEventListener('scroll', handleScroll);

    return () => {
      tableContainerElement?.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const renderSortIcon = (column: string) => {
    if (column === sort.column && sort.type === 'asc') return <ArrowUpwardIcon/>;
    if (column === sort.column && sort.type === 'desc') return <ArrowDownwardIcon/>;
    return <UnfoldMoreIcon/>;
  };

  const handleSort = (column: string, realName: string) => {
    let newType;
    if (realName === sort.realName)
      newType = sort.type === 'asc' ? 'desc' : sort.type === 'desc' ? null : 'asc';
    else newType = 'asc';

    setSort({
      realName: newType ? realName : null,
      column: newType ? column : null,
      type: newType,
    });
  };

  const handleSearch = () => {
    console.log('Search executed with query:', search);
  };

  if (isLoading || !data) return <LoadingSpinner/>;
  if (error) return <PageNotFound/>;

  const numberOfColumns = userRole === UserRole.ADMINISTRATOR || userRole === UserRole.EMPLOYEE ? 10 : 4;
  const maxWidth = numberOfColumns * 130;

  return (
    <Box
      p={2}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
    >
      <TableContainer
        component={Paper}
        sx={{minWidth: 300, maxWidth: maxWidth, maxHeight: 500, overflow: 'auto'}}
        ref={tableContainerRef}
      >
        <Box sx={{position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'white'}}>
          <SearchAndSortBar
            search={search}
            setSearch={setSearch}
            totalElements={data.pages[0].totalElements}
            onSearch={handleSearch}
          />
        </Box>
        <Table stickyHeader>
          <TableHeadUsers userRole={userRole} handleSort={handleSort} renderSortIcon={renderSortIcon}/>
          <TableBodyUsers
            data={data.pages.flatMap(page => page.content)}
            userId={userId}
            onEdit={onEdit}
            onDelete={onDelete}
            onAssignToService={onAssignToService}
            onViewAppointments={onViewAppointments}
          />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaginatedUserSection;