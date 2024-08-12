import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  py: 8,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  px: 2,
  gap: 4,
}

export const mainHeadingStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: {
    sm: '3rem',
    xs: '2rem'
  },
  color: '#333'
}

export const subHeadingStyle: SxProps = {
  fontSize: {
    sm: '1.5rem',
    xs: '1rem'
  },
  color: '#666'
}