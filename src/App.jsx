import React from 'react'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <About />
  )
}

export default App