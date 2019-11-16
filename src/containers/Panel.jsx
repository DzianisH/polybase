import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DefaultPanel from '../components/DefaultPanel';
import ShowNodePanel from './ShowNodePanel';


export default () => (
    <Switch>
        <Route path='/db/:nodeName' component={ShowNodePanel}/>
        <Route path='/' component={DefaultPanel}/>
    </Switch>
);
