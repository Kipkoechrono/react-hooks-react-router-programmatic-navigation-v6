import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Add useNavigate to import

function App() {
    // Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

    // Add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      <NavBar logout={logout} />
        { /*Pass login function to Outlet as context */}
      <Outlet context={login}/>
    </div>
  );
};

export default App;
