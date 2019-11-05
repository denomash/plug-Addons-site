import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../Components/Main';
import NotFound from '../Components/NotFound';

const AppRoutes = () => 
   (
       <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route component={NotFound} />

        </Switch>
       </BrowserRouter>
   )

export default AppRoutes
