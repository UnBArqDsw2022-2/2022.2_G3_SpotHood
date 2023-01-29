import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Icon from '../Icons';
import { CustomDrawer } from '../CustomDrawer';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  console.log(window.location.pathname, "veja")
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer>

          </CustomDrawer>
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