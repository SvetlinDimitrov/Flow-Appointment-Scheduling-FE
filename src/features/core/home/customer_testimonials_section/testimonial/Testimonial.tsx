import {styled} from "@mui/system";
import {Avatar, Box, Typography} from "@mui/material";

interface TestimonialProps {
  text: string;
  image: string;
  clientName: string;
}

const MainWrapper = styled(Box)(({theme}) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
}));

const MainParagraph = styled(Typography)(({theme}) => ({
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
  color: 'white',
}));

const ClientName = styled(Typography)(({theme}) => ({
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
  color: 'white',
}));

const Testimonial = ({ text, image, clientName }: TestimonialProps) => {
  return (
    <MainWrapper>
      <MainParagraph variant={"body1"}>
    {text}
      </MainParagraph>
      <Box display={'flex'} alignItems={'center'}
           justifyContent={'center'} gap={1}>
        <Avatar alt={clientName} src={image} sx={{
          width: 70,
          height: 70,
          mb: 1,
        }}/>
        <ClientName variant="body2">
          {clientName}
        </ClientName>
      </Box>
    </MainWrapper>
  );
};

export default Testimonial;