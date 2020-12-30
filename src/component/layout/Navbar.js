import React from 'react'
import {Container, Box, Paper, AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow:1}}> Material UI</Typography>
          <Button component={Link} color="inherit" to="/">Home</Button>
          <Button component={Link} color="inherit" to="/about">About</Button>
          <Button component={Link} color="inherit" to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
