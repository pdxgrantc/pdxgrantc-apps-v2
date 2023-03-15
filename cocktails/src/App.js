import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Ingredients from './Ingredients/Ingredients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
