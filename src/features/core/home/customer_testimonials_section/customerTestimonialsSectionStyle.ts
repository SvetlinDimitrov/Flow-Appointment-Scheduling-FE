import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  position: 'relative',
  textAlign: 'center',
  p: 3,
  backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finstyledecoparis.com%2Fwp-content%2Fuploads%2F2021%2F10%2F3d-rendering-modern-loft-gym-and-fitness-N8JNRLH-1.jpg&f=1&nofb=1&ipt=e72ca8d3257bcd78367eca0223ba6e28147e6c801395c2571ab1718966b42922&ipo=images)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: {
    lg: '100vh',
    sm: 'auto'
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 6,
  alignItems: 'center',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}

export const mainHeadingStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: {
    sm: '3rem',
    xs: '2rem'
  },
  color: 'white',
  mb: 4,
  lineHeight: '1.5',

}

export const testimonialWrapperStyle: SxProps = {
  display: 'grid',
  gridTemplateColumns: {
    lg: 'repeat(3, 1fr)',
    md: 'repeat(2, 1fr)',
  },
  gap: 4,
  justifyContent: 'center',
  alignItems: 'center'
}

export const aboutUsNavigationStyle: SxProps = {
  mt: 2,
  px: 2,
  py: 1,
  fontSize: '1rem'
};