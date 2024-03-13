import React, { useState } from "react";
import { EquipmentTypes as EquipmentInfo } from "../../types";

interface EquipmentInfoProps {
  onSubmit: (equipment: EquipmentInfo) => void;
}

const Equipment: React.FC<EquipmentInfoProps> = ({ onSubmit }) => {
  const [equipmentInfo, setEquipmentInfo] = useState<EquipmentInfo>({
    helmet: false,
    gameJersey: false,
    practiceJersey: false,
    pants: false,
    mouthpiece: false,
  });

  const handleCheckboxChange = (equipmentType: string) => {
    setEquipmentInfo((prevEquipment) => ({
      ...prevEquipment,
      [equipmentType]: !prevEquipment[equipmentType],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(equipmentInfo);
  };

  return (
    <div>
      <h2>Select Equipment</h2>
      <form onSubmit={handleSubmit}>
        <h3>Equipment Checkout</h3>
        <ul className="equipment">
          <li>
            <label>
              Helmet
              <input
                type="checkbox"
                name="helmet"
                checked={equipmentInfo.helmet}
                onChange={() => handleCheckboxChange("helmet")}
              />
            </label>
          </li>
          <li>
            <label>
              Game Jersey
              <input
                type="checkbox"
                name="gameJersey"
                checked={equipmentInfo.gameJersey}
                onChange={() => handleCheckboxChange("gameJersey")}
              />
            </label>
          </li>
          <li>
            <label>
              Practice Jersey
              <input
                type="checkbox"
                name="practiceJersey"
                checked={equipmentInfo.practiceJersey}
                onChange={() => handleCheckboxChange("practiceJersey")}
              />
            </label>
          </li>
          <li>
            <label>
              Pants
              <input
                type="checkbox"
                name="pants"
                checked={equipmentInfo.pants}
                onChange={() => handleCheckboxChange("pants")}
              />
            </label>
          </li>
          <li>
            <label>
              Mouthpiece
              <input
                type="checkbox"
                name="mouthpiece"
                checked={equipmentInfo.mouthpiece}
                onChange={() => handleCheckboxChange("mouthpiece")}
              />
            </label>
          </li>
        </ul>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Equipment;
