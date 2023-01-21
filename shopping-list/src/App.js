import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyLists from './Pages/MyLists/MyLists';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mylists' element={<MyLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
