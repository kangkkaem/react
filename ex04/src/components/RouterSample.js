import React from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import { Router } from 'react-router-dom';
import Profile from './Profile';

const RouterSample = () => {
  return (
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/profile/shim">Shim 프로필</Link></li>
            <li><Link to="/profile/hong">hong 프로필</Link></li>
            <li><Link to="/profile/lee">lee 프로필</Link></li>
        </ul>
        <hr/>
        <Route path="/home" component ={Home}/>
        <Route path="/about" component ={About}/>
        <Route path="/profile/:username" component={Profile}/>
    </div>
  )
}

export default RouterSample