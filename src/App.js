import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wizard from './component/register/Wizard';

function App() {
  return (    
      <Router>
        <Route path='/' exact= { true } strict component = { Wizard }   />
        <Route path = '/login' exact strict component = { Login } />
        <Route path = '/register' exact strict component = { Wizard } />  
        <Route path = '/about' exact strict render = { () => { return (<h1>About Us</h1>); } } />
        <Route path = '/contact' exact strict component = { Contact } />
      </Router> 
  );
}

const Contact = (props) => {
  return <div> Contact Us</div>;
};

const Login = (props) => {
  return <div> Login</div>;
};

export default App;
