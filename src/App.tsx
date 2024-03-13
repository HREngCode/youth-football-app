// General Imports
import { Route, Routes } from "react-router-dom";
import React from 'react';

//Pages Imports
import RegisterPage from "./pages/RegisterPage/RegisterPage";


//Component Imports
import FootballPlayer from './components/FootballPlayer/FootballPlayer';
import { FootballPlayer as FootballPlayerType } from './types';
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";


const App: React.FC = () => {

  return (
    <Routes>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/login" />
    <Route
      path="/"
      element={
           <HomePage/>
      }
    />
  </Routes>
  );
};

export default App;

