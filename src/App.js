import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Demo from './component/Demo';
import StyledDemo from './component/StyledDemo';
import CommonStyles from './component/CommonStyles';
import Component1 from './component/Component1';
import UseRefDemo from './component/UseRefDemo';
import FirstComponent from './component/FirstComponent';
import ParentToChild from './component/ParentToChild';
import Child2 from './component/Child2';
import Child1 from './component/Child1';
import TwoWayBind from './component/TwoWayBind';
import DynamicContent from './component/DynamicContent';
import NumberList from './component/NumberList';
import Home from './component/Home';
import Profile from './component/Profile';
import About from './component/About';
import Error from './component/Error';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Redirect from './component/Redirect';
import Form from './component/Form';


function App() {
 const[user, changeUser] = useState('userA'); 
 const numbers = [1,2,3,4,5];
  return (
    <div className="App">
      <h1>Hello world from React!</h1>
     
     <Form />
    {/*  <Router>
        <nav>
          <ul>
            
            <li ><Link to="/about">About Us</Link></li>
            <li ><Link to="/profile">Profile</Link></li>
            <li ><Link to="/home">Home Page</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path ="/home" element ={<Home />}/>
            <Route path ="/about" element ={<About />}/>
            <Route path ="/profile" element ={<Profile />}/>
            <Route path ="*" element ={<Error />}/>
        </Routes>
        <Redirect/>
     </Router>
     */}
    </div>
    
  );
}

export default App;
