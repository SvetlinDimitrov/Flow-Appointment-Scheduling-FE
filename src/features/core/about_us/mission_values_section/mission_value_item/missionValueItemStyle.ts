import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: {
    md: '25%',
    sm: '40%'
  },
  gap: 1,
  border: '1px solid white',
  borderRadius: 2,
  p: 2,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}

export const missionAvatarStyle: SxProps = {
  width: 100,
  height: 100,
  mb: 2
}

export const missionTitleStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: '1.25rem'
}

export const missionDescriptionStyle: SxProps = {
  color: 'dimgray',
  fontSize: '0.875rem'
}