import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Header from './Header';
import Body from './Body';

const theme = createTheme({
    palette: {
        primary: {
            main: '#363537',
        },
        secondary: {
            main: '#e53935',
        },
    }
});

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Header />
                    <Body />
                </div>
            </Router>
        </ThemeProvider>
    );

}

export default App;