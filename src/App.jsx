import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import ContactPage from './contact';
import NavBar from './nav-bar';

function App() {


  return (
    <div className='h-screen w-full'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
