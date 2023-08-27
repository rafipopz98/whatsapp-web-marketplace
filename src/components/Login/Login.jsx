import  {useContext, useState} from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
const Login = () => {
  const {auth, setAuth}=useContext(AuthContext)
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const SubmitHandler = () =>{
    if(phoneNumber === "" || password === "") return;
    axios.post("http://localhost:4000/user/signup", 
    {
      phoneNumber, password
    }).then(res=>{
      if(res.data.success){
        const obj = {phoneNumber: res.data.data.phoneNumber, uid: res.data.data._id};
        console.log("local",obj, res.data) 
        setAuth(obj)
        localStorage.setItem('user', JSON.stringify(obj));
        setAuth(obj)
        console.log(auth)
        setPhoneNumber("");
        setPassword("");
        navigate(`/`)
      }
    })
  }
  
  return (
    <>

   
    <div className="container">
    <div className="logo">
        <img src="https://w7.pngwing.com/pngs/68/505/png-transparent-whatsapp-message-icon-whatsapp-logo-whatsapp-logo-text-logo-grass.png" alt="" />
    </div>
      <div className="loginform">
      <h1>Get Started</h1>
        <div>
          <input type="text"  placeholder="Enter your Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={SubmitHandler}>Submit</button>
        {/* <input type="text" name="" id="" /> */}
      </div>
    </div>
    </>
  );
};

export default Login;
