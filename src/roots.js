import React, { Fragment } from 'react';
import Home from './components/index';
import Topic from './components/container/topic';
import { Route, } from 'react-router-dom';

const Roots = (
    <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/topic/:id" component={Topic} />
    </Fragment>
)

export default Roots;
