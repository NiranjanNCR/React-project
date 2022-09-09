import React from 'react'
import Home from "./Home"
import About from "./About"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Services from "./Services"
import Contact from "./Contact"
import Navbar from './Navbar';
import {Switch ,Route ,Redirect} from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
<Route  exact path = "/" component = {Home} />
<Route exact  path = "/about" component = {About} />
<Route exact  path = "/service" component = {Services} />
<Route exact  path = "/contact" component = {Contact} />
<Redirect to ="/"/>
 </Switch>
    </>
  )
};
export default App;

