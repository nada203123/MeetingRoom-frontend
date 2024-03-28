import "./ForgetPass.css";
import {useState} from "react";
import axios from "axios";
import Navigationbar from '../components/Navbar';
//import { useNavigate } from 'react-router-dom';


function ForgetPass(){
    const [email, setEmail] = useState(""); 
    //let navigation = useNavigate();

    function forgetPass(event) {
        event.preventDefault() ;
        axios.post("http://localhost:4000/auth/forgetPassword", { email: email })
        .then((response) => {
            alert('please check your email')
          })
          .catch((error) => {
            console.log(error.message);
          });

    }
    return(
      <>
      <Navigationbar/>
<div className="App" > 
          <form onSubmit={(event) => forgetPass(event)}> 
            <fieldset> 

              <h2>Forget your password ?</h2>
              <p>Enter your email to continue. </p>


              <div className="Field"> 
                <input 
                  value={email} 
                  onChange={(e) => { 
                    setEmail(e.target.value); 
                  }} 
                  placeholder="Email address" 
                /> 
              </div> 

              <button type="submit" > 
                Forget Password
              </button> 
            </fieldset> 
          </form> 
        </div>
        </> 
      ); 
}

export default ForgetPass;