import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

const Body = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route><Home /></Route>
            </Switch>
        </React.Fragment>
    );

};

export default Body;
