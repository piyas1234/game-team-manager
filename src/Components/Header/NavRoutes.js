import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import TeamDetails from '../Pages/TeamDetails'
import NotFound from '../Pages/NotFound'
const NavRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route path="/about"><About></About></Route>
                <Route path="/contact"><Contact></Contact></Route>
                <Route path="/teamdetails/:id"><TeamDetails></TeamDetails></Route>
                <Route><NotFound></NotFound></Route>
            </Switch>
        </div>
    );
};

export default NavRoutes;