import React, { createContext,useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes , Switch} from "react-router-dom";
import About from "./components/About";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
import Donate from "./components/Donate";
import {initialState, reducer} from '../src/reducer/UserReducer';


export const UserContext = createContext();

const Routing= () =>{
  return(
    
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="*" element={<Errorpage />} />

  </Routes>

  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>    
      <Navbar />
      <Routing />
      </UserContext.Provider>
    </>
    );
};

export default App;
