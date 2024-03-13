
import Navbar from '../../components/NavBar/NavBar';
import Equipment from '../../components/Equipment/Equipment';
import { EquipmentTypes } from '../../types';




const ProfilePage = () => {

  const handleEquipmentSubmission = (equipment: EquipmentTypes) => {
    // Handle the submission logic here
    console.log('Submitted Equipment:', equipment);
  };
  return ( 
    <div>
      <Navbar />
      <h1>This is the Profile Page</h1>
      <Equipment onSubmit={handleEquipmentSubmission} />
    </div>
   );
}
 
export default ProfilePage;