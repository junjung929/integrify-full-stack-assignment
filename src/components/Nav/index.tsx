import React from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" style={{ color: 'white' }}>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Nav;
