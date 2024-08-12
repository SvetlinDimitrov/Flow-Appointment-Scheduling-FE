import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  width: '100%',
}

export const secondaryWrapperStyle: SxProps = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 4,
  p: 2,
  mt: 4,
  mb: 4
}

export const missionValueWrapperStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 5,
  mt: 4
}

export const headerStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: {
    xs: '2rem',
    md: '3rem',
  },
  lineHeight: {
    xs: '1.2',
    md: '1.5',
  },
}

export const subheaderStyle: SxProps = {
  fontSize: {
    xs: '1.1rem',
    md: '1.4rem',
  },
  lineHeight: 1.5
}