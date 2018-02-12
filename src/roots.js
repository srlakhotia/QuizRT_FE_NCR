import React, { Fragment } from 'react';
import Player from './modules/container/player';
import Topic from './modules/container/topic';
import { Route, } from 'react-router-dom';

const Roots = (
    <Fragment>
        <Route exact path="/" component={Player} />
        <Route exact path="/topic/:id" component={Topic} />
    </Fragment>
)

export default Roots;
