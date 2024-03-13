// General Imports
import "../../App.css";

// Component Imports
import Navbar from "../../components/NavBar/NavBar";

// Context Imports


const HomePage = () => {

  return (
    <div><Navbar />
      <div >
          <div className="title-homepage">
            <h1>Welcome To Your HomePage!</h1>
          </div>
      </div>
    </div>
  );
};

export default HomePage;