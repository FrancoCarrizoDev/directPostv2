import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import Loggined from '../loggined/Loggined';
import Error from '../error/Error';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                        {/*Configurar rutass */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/welcome" component={Loggined} ></Route>
                    <Route component={Error} ></Route>

                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;