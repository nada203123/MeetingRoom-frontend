
import "./Signup.css";
import signUpImg from "../assets/SignUpImg.jpg"
import React, {useState} from "react";
import useEmailValidation from "./utils" 
import axios from "axios";
import { Link } from 'react-router-dom';
import Input from '../components/input';
import Navigationbar from '../components/Navbar';

import { FaInfoCircle, FaKey, FaMailBulk,  FaArrowAltCircleRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';




function SignUp(){
  const validateEmail = useEmailValidation() ;
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigation = useNavigate();


  function handleSignUp (event)  {
    
    

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
    event.preventDefault();

    axios.post("http://localhost:4000/auth/register", { username: fullName, email: email, password: password })
    .then((response)=>
    navigation("/VerifyAccount")   
   )  
      .catch((error) => {
        console.log(error.message);
      });
      
  };
  return (
    <>
    <Navigationbar/>
    
    <div className="signup-container">
        <div className="left-side">
        <img className='left-Image' src={signUpImg} alt="signup" /> 
        </div>
        <div className="right-side">
        <h2 className="signup-title">Sign Up</h2>
        <div className='form'> 
          <Input type={"text"} icon={<FaInfoCircle size={24} />} onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder={"Full Name"} />
          <Input type={"text"} icon={<FaMailBulk size={24} />} onChange={(e) => setEmail(e.target.value)} value={email} placeholder={"Email Address"} />
          {emailError && <span style={{ fontSize:'12px',color: 'red' }}>{emailError}</span>}
          <Input type={"password"} icon={<FaKey size={24} />} onChange={(e) => setPassword(e.target.value)} value={password} placeholder={"Password"} />
          {passwordError && <span style={{ fontSize:'12px',color: 'red' }}>{passwordError}</span>}
        </div>
       
        <div className="vertical-align">
          <button className="submit-button" onClick={handleSignUp}>
            <FaArrowAltCircleRight size={30} />
          </button>
          <span>Sign Up</span>
        </div>
        <p className="already-have-account">Already have an account? <strong><Link className="link" to="/SignIn">Sign In</Link></strong></p>
        </div>
        </div>
        </>
  );

}
export default SignUp;





   
  
    /*
  function App() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the backend
      fetch('/auth/register')
        .then((response) => response.json())
        .then((data) => {setData(data);});
    }, []);*/
// axios is better than fetch because it make an automatically json parsing
//Supports older browsers
    