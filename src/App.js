import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Categorie from './Components/Categories/Categorie';
function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Categories" element={<Categorie />}/>
      </Routes>
      </BrowserRouter> 
   
   </>
  );
}

export default App;
