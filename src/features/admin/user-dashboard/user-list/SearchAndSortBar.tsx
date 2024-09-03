import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

interface SearchAndSortBarProps {
  search: string;
  setSearch: (value: string) => void;
  totalElements: number;
  onSearch: () => void;
}

const SearchAndSortBar = ({search, setSearch, totalElements = 15, onSearch}: SearchAndSortBarProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Box display="flex" gap={2} p={1}>
      <Typography variant="h5" width={250} alignContent={'center'} textAlign={'center'}>
        Total: {totalElements}
      </Typography>
      <TextField
        fullWidth={true}
        size={'small'}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="search by name or email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon onClick={onSearch} style={{cursor: 'pointer'}}/>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchAndSortBar;