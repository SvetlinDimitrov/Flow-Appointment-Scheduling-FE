import {styled} from "@mui/system";
import {Avatar, Box, Typography} from "@mui/material";

const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '40%',
  [theme.breakpoints.up('sm')]: {
    width: '40%',
  },
  [theme.breakpoints.up('md')]: {
    width: '25%',
  },
  gap: theme.spacing(1),
  border: '1px solid white',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

interface MissionValueItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const MissionValueItem = ({iconSrc, title, description}: MissionValueItemProps) => {
  return (
    <MainWrapper>
      <Avatar
        src={iconSrc}
        alt={`${title} Icon`}
        sx={{
          width: 100,
          height: 100,
          marginBottom: 2,
        }}
      />
      <Typography
        variant={"h6"}
        fontStyle={'bold'}
        fontSize={'1.25rem'}
      >
        {title}
      </Typography>
      <Typography
        variant={"body2"}
        color={'dimgray'}
        fontSize={'0.875rem'}
      >
        {description}
      </Typography>
    </MainWrapper>
  );
};

export default MissionValueItem;