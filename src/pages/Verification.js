import "./VerifyAccount.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navigationbar from '../components/Navbar';
 


function Verification(){
    const [email, setEmail] = useState(""); 
    const [otpcode, setOtpCode] = useState(""); 
    let navigation = useNavigate();


    function verifyAccount (event) {
        event.preventDefault();
        axios.post("http://localhost:4000/auth/verifyAccount" , {email:email,inputCode: otpcode})
        .then((response)=>

        navigation("/SignIn")   
        )
        .catch((error)=> {
            console.log(error.message)
        }   )
        
    }

   


    return ( 
      <>
      <Navigationbar/>
      <div className="all">
        <div className="App" > 
          <form onSubmit={(event) => verifyAccount(event)}> 
            <fieldset> 

              <h2>Verify Your Account</h2> 
              <p>We have sent you an email containing the code needed to complete your registration steps. </p>


              <div className="Field"> 
                <input 
                  value={email} 
                  onChange={(e) => { 
                    setEmail(e.target.value); 
                  }} 
                  placeholder="Email address" 
                /> 
              </div> 

              <div className="Field"> 
                <input 
                  value={otpcode} 
                  type="number" 
                  onChange={(e) => { 
                    setOtpCode(e.target.value ); 
                  }} 
                  placeholder="OTP Code" 
                /> 
                
              </div> 
              
             

              <button type="submit" > 
                Submit
              </button> 
            </fieldset> 
          </form> 
        </div> </div>
        </>
      ); 
 
};

export default Verification;