
import "./SignIn.css";
import React,{useState,useEffect,useContext} from "react";
import { FaKey, FaMailBulk, FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useEmailValidation from "./utils" ;
import { Link } from 'react-router-dom';
import Input from '../components/input';
import signInImg from "../assets/SignInImg.jpg"
import Navigationbar from '../components/Navbar';


 


function SignIn(){
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const validateEmail = useEmailValidation()
    const navigate = useNavigate()
    

   

    function login(event) {
      event.preventDefault();
      if (!validateEmail(email)) {
        setEmailError("Invalid email address");
        return;
      } else {
        setEmailError("");
      }
      if(!password){
        setPasswordError("Please enter a password");
        return;
      }else{
        setPasswordError("")
      }



      axios.post("http://localhost:4000/auth/login", { email: email, password: password })
        .then((response) => {
          console.log('Token received:', response.data.token);
          localStorage.setItem('token',response.data.token);
          localStorage.getItem('token')
         // console.log('isAuthenticated after login:', isSignedIn);
          navigate("/Home")
        })
        .catch((error) => {
          console.log(error.message);
        });
        
  }
 

    return ( 
      <>
       
      <Navigationbar />
       
<div className='signup-container'>
      <div className='right-side'>
      <h2 className="signup-title">Sign in</h2>
      <div className='form'>
      <Input type={"text"} icon={<FaMailBulk size={24} />} onChange={(e) => setEmail(e.target.value)} value={email} placeholder={"Email Address"} />
      {emailError && <span style={{ fontSize:'12px',color: 'red' }}>{emailError}</span>}
      <Input type={"password"} icon={<FaKey size={24} />} onChange={(e) => setPassword(e.target.value)} value={password} placeholder={"Password"} />
      {passwordError && <span style={{ fontSize:'12px',color: 'red' }}>{passwordError}</span>}
      </div>
      <span className= "link" onClick={()=>navigate("/ForgetPass")}>forgot your password? </span>
      <div className="vertical-align">
          <button className="submit-button" onClick={login}>
            <FaArrowAltCircleRight size={30} />
          </button>
          <span>Sign In</span>
        </div>
        <p className="already-have-account">Need an account? <strong><Link className="link" to="/">Sign Up</Link></strong></p>

      </div>
      <div className='left-side'>
      <img className='left-Image' src={signInImg} alt="signin" />
      </div>
    </div>
    
    
    </>

    );
};

export default SignIn;