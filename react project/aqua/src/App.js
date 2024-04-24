import React from 'react';
import './App.css';
import Mainn from './pages/Main/Mainn';
import Stock from './pages/Stock/Stock';
import Cafee from './pages/Cafe/Cafee';
import Contacts from './pages/Contacts/Contacts';
import Price from './pages/Price/Price';
import Ruless from './pages/Rules/Ruless';
import News from './pages/News/News';
import Review from './pages/Review/Review';


import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";





function App() {
  

  return (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Mainn />}></Route>
                <Route exact path="/stock" element={<Stock />}></Route>
                <Route exact path='/cafe' element={<Cafee />}></Route>
                <Route exact path='/contacts' element={<Contacts />}></Route>
                <Route exact path='/price' element={<Price />}></Route>
                <Route exact path='/rules' element={<Ruless />}></Route>
                <Route exact path='/news' element={<News />}></Route>
                <Route exact path='/review' element={<Review />}></Route>
            </Routes>
        </Router>
        
    </>

  );
}

export default App;
