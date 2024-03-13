export interface FootballPlayerInfoTypes {
  name: string;
  dob: string;
  team: string;
  weight: string;
  grade: string;
  parentName: string;
  phoneNumber: string;
}

export interface EquipmentTypes {
    helmet: boolean;
    gameJersey: boolean;
    practiceJersey: boolean;
    pants: boolean;
    mouthpiece: boolean;
    [key: string]: boolean;
}
