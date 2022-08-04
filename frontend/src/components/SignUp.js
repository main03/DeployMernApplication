import React, { useRef, useState} from "react";
import "./SignUp.css";
import ConnectBackend from "./ConnectBackend";


const SignUp = () => {
  const name = useRef("");
  const email=useRef("");
  const password=useRef("");
  

 const [nameerror,setNameError]=useState(true); 
 const [emailerror,setemailerror]=useState(true);
 const [passworderror,setpassworderror]=useState(true);
 const [buttonStatus, setButtonStatus] = useState(true);

 //validating name here
 const nameemptyvalidation = (name) => {
  // setNameError(!!e);
  const reg=/^[a-zA-Z ]*$/;
  if (reg.test(name) === false) {
    setNameError("Enter valid name");
    setButtonStatus(true);
  } else {
    setNameError(" ");
    setButtonStatus(false);
  }


};

//validating email here
const emailemptyvalidation = (email) => {
  // setemailerror(!!email);
  const regemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  
  if (regemail.test(email) === false) {
    setemailerror("enter valid email address");
    setButtonStatus(true);
  } else {
    setemailerror(" ");
    setButtonStatus(false);
  }
  
};



const Submitt = (e) => {
 
    e.preventdefault(); 
  
  
  };


  return (
    <div className="Register">
      <h1 className="sherry">User Registeration</h1>
      <form onSubmit={Submitt}>
      <div>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter name :"
          ref={name}
          onBlur={(e) => nameemptyvalidation(e.target.value)}
         
         
           />
          
             {nameerror ? <span className="text-danger">{nameerror}</span> : null}
          
       
      </div>
      <div>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Email address :"
          ref={email}
          onBlur={(e) => emailemptyvalidation(e.target.value)}
         />

        
         {emailerror ? <span className="text-danger">{emailerror}</span> : null}
       
      </div>
      <input
          type="password"
          className="inputBox"
          placeholder="Enter password:"
          ref={password}
      />
           {/* {!passworderror && <span className="text-danger"> password can not be empty </span> } */}
          
      
        <button  className="submitbutton" disabled={buttonStatus}
          onClick={() => ConnectBackend(name.current.value,email.current.value,password.current.value) }
         > Submit</button>

        
        
        
      
        


        
      </form>
    </div>
  );
};
export default SignUp;

