import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Body from './Body';

const App = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <Body />
                </div>
            </Router>
        </div>
    );

}

export default App;