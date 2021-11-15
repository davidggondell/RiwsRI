import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import { Container } from '@mui/material';

const Body = () => {

    return (
        <Container sx={{ padding: 4 }}>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route><Home /></Route>
            </Switch>
        </Container>
    );

};

export default Body;
