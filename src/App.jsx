import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './home';
import ContactPage from './contact';
import NavBar from './nav-bar';

function App() {


  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-violet-200 via-white to-blue-100'>
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
