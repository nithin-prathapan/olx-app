import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/Context";
import "./Signup.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup() {
  const history=useHistory()
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(result);
      result.user.updateProfile({displayName:userName}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          phone:phone,
          username:userName,
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
            type="number"
            id="lname"
            name="phone"
           
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            id="lname"
            name="password"
      
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
