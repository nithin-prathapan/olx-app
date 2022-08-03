import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Post from "./store/PostContext";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./store/Context";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    console.log(user);
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/view">
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
