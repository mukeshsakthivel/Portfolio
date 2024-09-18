import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './component/NavBar';
import AboutMe from './page/AboutMe';
import { Skill } from './page/Skill';
import Project from './page/Project';
import Qualification from './page/Qualification';


const App = () => {
  return (
    <>
      <Home/>
      <NavBar/>
      <AboutMe/>
      <Skill/>
      <Qualification/>
      <Project/>
      
   </>
  );
};

export default App;