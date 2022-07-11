import './App.css';
import React from 'react';
import Navbar from './CodeFile/Navbar';
import Footer from './CodeFile/Footer';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Home from "./CodeFile/Home/Home";
import Components from "./CodeFile/Components/Components";
import Important from "./CodeFile/Important/Important";
import Software from "./CodeFile/Software/Software";

// Switch = Routes (version 6)
//https://github.com/briancodex/react-website-v1/tree/master/src/components
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Components' element={<Components/>} />
        <Route path='/Software' element={<Software/>} />
        <Route path='/Important' element={<Important/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;