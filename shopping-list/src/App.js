import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import MyLists from './Pages/MyLists/MyLists';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/MyLists' element={<MyLists />} />
        <Route path='/MyLists/:listName' element={<List />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;