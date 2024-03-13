// src/components/FootballPlayer.tsx
import React, { useState } from 'react';
import { FootballPlayerInfoTypes as FootballPlayerInfo } from '../../types';

interface FootballPlayerInfoProps {
  onSubmit: (player: FootballPlayerInfo) => void;
}

const FootballPlayer: React.FC<FootballPlayerInfoProps> = ({ onSubmit }) => {
  const [playerInfo, setPlayerInfo] = useState<FootballPlayerInfo>({
    name: '',
    dob: '',
    team: '',
    weight: '',
    grade: '',
    parentName: '',
    phoneNumber: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPlayerInfo((prevPlayer) => ({ ...prevPlayer, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(playerInfo);
  };

  return (
    <div>
      <h2>Create Football Player Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={playerInfo.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="text"
            name="dob"
            value={playerInfo.dob}
            onChange={handleInputChange}
            placeholder="MM/DD/YYYY"
            required
          />
        </label>
        <label>
          Team:
          <input
            type="text"
            name="team"
            value={playerInfo.team}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            value={playerInfo.weight}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            value={playerInfo.grade}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Parent Name:
          <input
            type="text"
            name="parentName"
            value={playerInfo.parentName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={playerInfo.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FootballPlayer;
