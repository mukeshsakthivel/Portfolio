import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import NavBar from './component/NavBar';
import AboutMe from './page/AboutMe';
import { Skill } from './page/Skill';
import Project from './page/Project';


const App = () => {
  return (
    <>
      <Home/>
      <NavBar/>
      <AboutMe/>
      <Skill/>
      <Project/>
      
   </>
  );
};

export default App;