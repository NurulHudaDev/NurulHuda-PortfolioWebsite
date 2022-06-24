import './App.css';
import About from './Pages/About/About';
import ContactSection from './Pages/ContactSection/ContactSection';
import Footer from './Pages/Footer/Footer';
import MyProject from './Pages/MyProject/MyProject';
import Servics from './Pages/Servics/Servics';
import Skills from './Pages/Skills/Skills';
import Summary from './Pages/Summary/Summary';
import TopBanner from './Pages/TopBanner/TopBanner';
import TopNavigason from './Pages/TopNavigason/TopNavigason';

function App() {
  return (
    <div>
      <TopNavigason></TopNavigason>
      <TopBanner></TopBanner>
      <About></About>
      <Servics></Servics>
      <Skills></Skills>
      <Summary></Summary>
      <MyProject></MyProject>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
