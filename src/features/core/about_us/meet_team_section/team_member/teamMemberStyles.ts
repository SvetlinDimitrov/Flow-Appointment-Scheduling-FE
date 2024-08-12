import {SxProps} from "@mui/material";

export const mainWrapperStyle: SxProps = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: {
    lg: '25%',
    md: '40%',
    sm: '80%'
  },
  gap: 1,
  border: '1px solid #ccc',
  borderRadius: 2,
  padding: 2,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}

export const avatarStyle: SxProps = {
  width: 150,
  height: 150,
  marginBottom: 2
}

export const teamMemberNameStyle: SxProps = {
  fontWeight: 'bold',
  fontSize: '1.25rem'
}

export const teamMemberRoleStyle: SxProps = {
  color: 'black',
  fontStyle: 'italic'
}

export const teamMemberDescriptionStyle: SxProps = {
  color: 'dimgray',
  fontSize: '0.875rem'
}