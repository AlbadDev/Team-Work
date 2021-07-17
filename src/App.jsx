import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import EmployerDetail from './components/EmployerData/EmployerDetail'
import EmployerCard from './components/EmployerData/EmployerCard'
import About from './components/About/About'

export default function App() {
    return (
        <Router>
            <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home}/>
            <Route  path='/Team' component={EmployerDetail} />
            <Route exact path='/About' component={About} />
        </Switch>
        <Footer />
        </Router>
    )
}
