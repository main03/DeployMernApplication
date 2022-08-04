import React from 'react';
import  { useRef, useState} from "react";
import "./Login.css";

const Login =(props)=>
{
    const email=useRef("");
    const password=useRef("");
    const [emailerror,setemailerror]=useState(true);
    const [buttonStatus, setButtonStatus] = useState(true);

    const emailemptyvalidation = (email) => {
         const regemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
         if (regemail.test(email) === false) {
          setemailerror("enter valid email address");
          setButtonStatus(true);
        } else {
          setemailerror(" ");
          setButtonStatus(false);
        }
    };
    const handlesubmit = (e) => {
 
        
        alert("Login SuccessFully");
        console.log("Login Successfully");
        e.preventDefault();
      
      };


    return(
        
        <div className="master">
        <h3>Login to your Account</h3>
         <form onSubmit={handlesubmit}>
         <input
          type="text"
          className="inputBox"
          placeholder="Enter Email Please :"
          ref={email}
          onBlur={(e) => emailemptyvalidation(e.target.value)}
         />
         {emailerror ? <span className="text-danger">{emailerror}</span> : null}
         <input
          type="password"
          className="inputBox"
          placeholder="Enter password Please:"
          ref={password}
      />
      <button  className="appButton" disabled={buttonStatus} >Submit</button>
      </form>
      </div>
      

    );
}
export default  Login;
