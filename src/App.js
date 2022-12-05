import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WebDesign from './Components/WebDesign';
import AppDesign from './Components/AppDesign';
import GraphicDesign from './Components/GraphicDesign';
import OurCompany from './Components/OurCompany';
import Locations from './Components/Locations';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/ourcompany' element={<OurCompany />}>
          </Route>
          <Route path='/location' element={<Locations />}>
          </Route>
          <Route path='/contact' element={<Contact />}>
          </Route>
          <Route path='/webDesign' element={<WebDesign />}>
          </Route>
          <Route path='/appDesign' element={<AppDesign />}>
          </Route>
          <Route path='/graphicDesign' element={<GraphicDesign />}>
          </Route>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
