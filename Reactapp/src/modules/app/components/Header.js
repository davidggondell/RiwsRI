import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar >
                <Typography sx={{ marginLeft: 5, fontWeight: 600 }} variant="h4" color="inherit" component="div">
                    Scraping Fitness
                </Typography>
            </Toolbar>
        </AppBar>
    );

};

export default Header;
