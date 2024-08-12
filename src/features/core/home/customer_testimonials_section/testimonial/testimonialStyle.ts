import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  borderRadius: 2,
  padding: 3,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
}

export const mainParagraphStyle: SxProps = {
  fontSize: {
    sm: '1.5rem',
    xs: '1rem'
  },
  color: 'white'
}

export const clientNameAndAvatarWrapperStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1
}

export const avatarStyle: SxProps = {
  width: 70,
  height: 70,
  marginBottom: 1
}

export const clientNameStyle: SxProps = {
  fontSize: {
    sm: '1.8rem',
    xs: '1.4rem'
  },
  color: 'white'
}