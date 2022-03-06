import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App:React.FC = ()=> {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/tourist-page/" element={<Home/>} />  
          <Route path="/services" element={<Services/>}  />
          <Route path="/products" element={<Products/>}/>
          <Route path="/sign-up" element={<SignUp/> }/>
        </Routes>
      
      </Router>
      </div>
  );
}

export default App;
