import "./ResetPass.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navigationbar from '../components/Navbar';
 


function ResetPass({ match }){
    const { token } = useParams()
    const [password, setPassword] = useState(""); 
    const [ConfirmPass, setConfirmPass] = useState(""); 
    const [error, setError] = useState('');
    let navigation = useNavigate();


    const handleResetPassword = async (event) => {
        event.preventDefault();
        if (password !== ConfirmPass) {
            setError('Passwords do not match');
            return;
          }
      
      try {
        const response = await axios.patch(`http://localhost:4000/auth/resetPassword/${token}`,  { password: password, confirmPassword: ConfirmPass.value });
        console.log(response.data);
        navigation('/SignIn');
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to reset password');
      }
        
  }


    return ( 
      <>
      <Navigationbar/>
        <div className="App" > 
          <form onSubmit={(event) => handleResetPassword(event)}> 
            <fieldset> 

              <h2>Set up your new password</h2> 
              



              <div className="Field"> 
                <input 
                  value={password.value} 
                  onChange={(e) => { 
                    setPassword({ ...password, value: e.target.value }); 
                  }} 
                  placeholder="Password" 
                /> 
              </div> 

              <div className="Field"> 
                <input 
                  value={ConfirmPass.value} 
                  type="password" 
                  onChange={(e) => { 
                    setConfirmPass({ ...ConfirmPass, value: e.target.value }); 
                  }} 
                  placeholder="Confirm Password" 
                /> 
                
              </div> 
              
             

              <button type="submit" > 
                Update Password
              </button> 
            </fieldset> 
          </form> 
        </div> 
        </>
      ); 
 
};

export default ResetPass;