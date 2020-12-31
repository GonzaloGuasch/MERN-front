import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.js';
import AddPeli from './AddPeli.js';
import Info from "./Info";

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/addPeli' component={AddPeli} />
                <Route exact path='/info' component={Info} />
                </Switch>
        </BrowserRouter>    
    );
}