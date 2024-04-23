// import logo from './logo.svg';
// import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbars from './components/Navbars';
import Interface from './components/Interface';

function App() {
  return (
    <div >
     <Navbars/>
     <Interface/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
    </div>
    
  );
}

export default App;
