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

function App() {
  /* const[selectedMessage, setMessage] = useState(''); */
  return (
    <div className="App">
      <h1>Hello world from React!</h1>
     
        <TwoWayBind/>

    </div>
  );
}

export default App;
