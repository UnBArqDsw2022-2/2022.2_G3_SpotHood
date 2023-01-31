import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { CustomDrawer } from '../CustomDrawer';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useLocation } from 'react-router-dom';

export default function Navbar() {

  const { user } = useContext(UserContext)
  const location = useLocation();

  console.log(location)

  return user && (location.pathname !== "/") && (location.pathname !== "/criar-conta") && (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Drawer */}
          <CustomDrawer/>
          {/* Drawer */}
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1}}
          >
            SpotHood
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}