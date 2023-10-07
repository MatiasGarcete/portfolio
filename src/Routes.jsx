import React from "react";
//importación de BrowserRouter 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importación de los componentes
import About from './Componentes/about/About';
import Contact from './Componentes/contact/Contact';
import Footer from './Componentes/footer/Footer';
import Header from './Componentes/header/Header';
import Home from './Componentes/home/Home'
import Projects from './Componentes/projects/Projects';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route/>
                <Route/>
                <Route/>

            </Switch>
        </Router>
    )

}

export default Routes;