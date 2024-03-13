import React from "react";
import FootballPlayer from "../../components/FootballPlayer/FootballPlayer";
import { FootballPlayer as FootballPlayerType } from "../../types";
import Navbar from "../../components/NavBar/NavBar";

const RegisterPage: React.FC = () => {
  const handlePlayerSubmission = (player: FootballPlayerType) => {
    console.log("Submitted Player:", player);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1>Register Page</h1>
        <FootballPlayer onSubmit={handlePlayerSubmission} />
      </div>
    </div>
  );
};

export default RegisterPage;
