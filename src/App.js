import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Verification from './pages/Verification';
import ForgetPass from './pages/ForgetPass';
import ResetPass from './pages/ResetPass';
import Home from './pages/home';
import RoomDetails from './pages/RoomDetails';

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/VerifyAccount" element={<Verification/>}/>
        <Route path="/ForgetPass" element={<ForgetPass/>}/>
        <Route path="/ResetPass" element={<ResetPass/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/roomD/:_id" element={<RoomDetails/>}/>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles={
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
}