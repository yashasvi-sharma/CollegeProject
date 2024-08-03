import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "../App";

const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);
  const RenderMenu = () =>{
    if(state){
      return(
        <>
         <li className="nav-item">
                <NavLink className="nav-link active text-primary" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/donate">
                  Donate
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/logout">
                  Logout
                </NavLink>
              </li>
        </>
      )
    }else{
      return(
        <>
         <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-primary" aria-current="page" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/login">
                  Login
                </NavLink>
              </li>
             
        
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">        
          <NavLink className="navbar-brand " to="/">
          <h4>  Divya <span className="text-primary font-italic">Kiran</span>
          </h4>
           <em> <figcaption class="col-sm-8"  >
            An Online Portal for <cite title="Source Title ">  <span className="text-primary">Donation</span> </cite>
            </figcaption></em>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar  " id="navbarNav">
            <ul className="navbar-nav  ">
             <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

