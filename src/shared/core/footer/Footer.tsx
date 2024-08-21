import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {paths} from "../../paths/paths.ts";

const Footer = () => {
  return (
    <AppBar position={'static'} sx={{
      top: 'auto',
      bottom: 0,
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2
      }}>
        <Typography variant={"body1"} color={"inherit"}
        sx={{
          fontSize:{
            xs: '0.7rem',
            sm: '1.2rem',
            md: '1.4rem'
          }
        }}>
          © 2024 Prime Holding
        </Typography>
        <Box display={'flex'} gap={2}>
          {paths.defaultPaths.map((path, index) => (
            <Link key={index} to={Object.values(path)[0]}
                  style={{textDecoration: 'none', color: 'inherit'}}>
              <Typography variant={"body1"} color={"inherit"}
              sx={{
                fontSize:{
                  xs: '0.7rem',
                  sm: '1.2rem',
                  md: '1.4rem'
                }
              }}>
                {Object.keys(path)[0]}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;