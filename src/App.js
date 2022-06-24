import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ContactSection from './Pages/ContactSection/ContactSection';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import MyProject from './Pages/MyProject/MyProject';
import Servics from './Pages/Servics/Servics';
import Skills from './Pages/Skills/Skills';
import TopNavigason from './Pages/TopNavigason/TopNavigason';

function App() {
  return (
    <div>
      <TopNavigason></TopNavigason>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/servics' element={<Servics />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/my-project' element={<MyProject />}></Route>
        <Route path='/contact-section' element={<ContactSection />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
