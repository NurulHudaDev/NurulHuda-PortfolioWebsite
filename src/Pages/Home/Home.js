import React from 'react';
import About from '../About/About';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import MyProject from '../MyProject/MyProject';
import Servics from '../Servics/Servics';
import Skills from '../Skills/Skills';
import Summary from '../Summary/Summary';
import TopBanner from '../TopBanner/TopBanner';
import TopNavigason from '../TopNavigason/TopNavigason';

const Home = () => {
   
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
        </div>
    );
};

export default Home;