import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Home from "./components/pages/Home";

// Switch = Routes (version 6)

 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />{/*
        <Route path='/Components' component={Components} />
        <Route path='/Software' component={Software} />
        <Route path='/Important' component={Important} />
        <Route path='/sign-up' component={SignUp} />   */}
      </Routes>
    </Router>
  );
}

export default App;