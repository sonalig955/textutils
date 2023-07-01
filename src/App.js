
import About from './About'
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#1c252d";
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }

  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3" style={{ height: '100vh'}}>
        
          <Routes>
            <Route exact path="/" element={<TextForm heading="Try TextUtils" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />}/>
              
            
          </Routes>
       

        {/* <About/> */}
        {/* <TextForm heading="Try TextUtils" mode={mode} /> */}
      </div>
      <Footer mode={mode}/>
      </Router>
      
        
      
    </>
  );
}

export default App;
