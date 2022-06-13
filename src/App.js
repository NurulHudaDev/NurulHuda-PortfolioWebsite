import './App.css';
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
      <Servics></Servics>
      <Skills></Skills>
      <Summary></Summary>
    </div>
  );
}

export default App;
