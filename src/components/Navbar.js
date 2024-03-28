import "./Navbar.css";
import React, {useState} from "react";
import { NavLink } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";




function Navigationbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  
   
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          MeetingRoom
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/Home" className="nav-link">Home</NavLink>
            </li>
            {!localStorage.getItem('token') && (
            <li>
              <NavLink to="/" className="nav-link">Sign Up</NavLink>
            </li>
            )}
            {!localStorage.getItem('token') && (
            <li>
              <NavLink to="/SignIn" className="nav-link">Sign In</NavLink>
            </li>
            )}
            {localStorage.getItem('token') && (
            <li >
              <div className="dropdown" >
              <NavLink onClick={handleDropdownClick} className="nav-link" >Profile</NavLink>
              {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <NavLink to="/Home" className="nav-link"><IoIosInformationCircle /> View Profile</NavLink>
                </li>
                
                <li>
                  <NavLink to="/Home" className="nav-link" ><IoLogOutOutline /> Logout</NavLink>
                </li>
              </ul>
            )}
            </div>
            </li>

            )}
            
          </ul>
        </div>
      </div>
    </nav>
 );
}

export default Navigationbar;