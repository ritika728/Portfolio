import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './navigation.css';
import './about.css'


export default function DrawerAppBar(props) {

  const drawerWidth = 240;
  const navItems = ['ABOUT', 'PROJECTS', 'ACHIEVEMENTS', 'CONTACT'];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <a className='drawerLink' sx={{ textAlign: 'center' }} href={"#"+item}>{item}</a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" id="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            {navItems.map((item) => (
              
              <a href={"#"+item} key={item} sx={{ color: '#fff' }}>{item}</a>
                
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }} id="ABOUT">
        <Toolbar />
        <Typography component={'div'}>
          <div id='ABOUT'>
          <div className="main">
          <div className="heading">
            <h1>Hello, I'm Ritika Malik</h1>
            <p>I'm a Front-End Web Developer, with a keen interest in Full Stack Web Developement. Currently I am in my pre-final year pursuing bachelor's degree in CSE. </p>
            <p>My front-end skills includes HTML, CSS, JavaScript basics, React JS. I partcipate frequently in coding contests and like contributing to open source. </p>
          </div>
          <div className="photo">
            <img className="image"  style={{height:"300px"}}src={require('./image.jpg')} />
          </div>
         </div>
         </div>
        </Typography>
      </Box>
    </Box>
  );
}
