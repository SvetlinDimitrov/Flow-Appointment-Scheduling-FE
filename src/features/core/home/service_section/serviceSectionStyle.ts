import {SxProps} from "@mui/material";

export const mainRapperStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
  p: 2,
  mt: 5,
  mb: 5
};

export const mainTitleStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: '#333'
};

export const subTextStyle: SxProps = {
  fontSize: '1.25rem',
  color: '#666',
  lineHeight: '1.5'
};

export const cardsHolderStyle: SxProps = {
  display: 'flex',
  flexDirection: {
    lg: 'row',
    xs: 'column'
  },
  justifyContent: 'center',
  gap: 5,
};
