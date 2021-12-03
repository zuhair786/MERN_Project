import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from './components/Navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Auth from './components/Auth/Auth.js';

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
