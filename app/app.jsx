import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Board from 'Board';

// App css
require('style!css!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Board}></Route>
    </Router>, 
    document.getElementById("react-container")
);