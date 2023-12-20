import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Categorie from './Components/Categories/Categorie';
import FrontEndQuizz from './Components/FrontQuizz/FrontQuizz';
import BackEndQuizz from './Components/BackQuizz/BackQuizz';
import FullQuizz from './Components/FullQuizz/FullQuizz';
function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Categories" element={<Categorie />}/>
        <Route exact path="/FrontQuizz" element={<FrontEndQuizz />}/>
        <Route exact path="/BackQuizz" element={<BackEndQuizz />}/>
        <Route exact path="/FullQuizz" element={<FullQuizz />}/>
      </Routes>
      </BrowserRouter> 
   
   </>
  );
}

export default App;
