import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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
import User from './User';


function App() {
 //const[user, changeUser] = useState('userA'); 
// const numbers = [1,2,3,4,5];

window.fetch = jest.fn(() => {
  const user = {name : 'Jack', email: 'jack@abc.com'}
  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

  const[user, setUser] = useState(null);
  const[error, setError] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((user) => setUser(user))
    .catch((error) => setError(error.message));
  }, []);

  if(error) {
    return <span>{error.message}</span>
  }
  return (
    <div className="App">
      {user ? <User user={user}/> :<span>Loading...</span> }
    </div> 
   );
}

export default App;
