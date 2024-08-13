import {SxProps} from "@mui/material";

export const mainBoxStyle: SxProps = {
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textAlign: 'center',
  overflow: 'hidden',
  gap: '4rem',
  backgroundImage: 'url(/static/images/home/hero_section_bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
};

export const headerStyle: SxProps = {
  fontSize: {
    xs: '2rem',
    md: '3rem',
  },
  lineHeight: {
    xs: '1.5',
    md: '1.5',
  },
  p: {
    xs: '1rem',
    md: '2rem',
  },
}

export const subHeaderStyle: SxProps = {
  fontSize: {
    xs: '1.1rem',
    md: '1.4rem',
  },
  lineHeight: '1.5',
  p: {
    xs: '1rem',
    md: '2rem',
  },
}

