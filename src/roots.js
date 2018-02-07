import React, { Fragment } from 'react';
import Home from './components/index';
import { Route, } from 'react-router-dom';

const Roots = (
    <Fragment>
        <Route exact path="/" component={Home} />
    </Fragment>
)

export default Roots;
