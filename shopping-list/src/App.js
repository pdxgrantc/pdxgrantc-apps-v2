import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import MyLists from './Pages/MyLists/MyLists';
import List from './Pages/List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/my-lists' element={<MyLists />} />
        <Route path='/my-lists/:listName' element={<List />} />
        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
