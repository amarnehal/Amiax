import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service'
import {BrowserRouter, Route,Routes} from 'react-router-dom'



function App() {
  return (
     <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/service' element={<Service/>}/>

     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
