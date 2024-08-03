
import React, {useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../App";


const Logout = () => {
   const {state, dispatch} = useContext(UserContext)

    const [userData, setUserData]= useState({})
  
    let navigate = useNavigate();
    const callLogoutPage = async () => {
      
      try {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
        });
  
          const data = await res.json();
          setUserData(data)
  
          console.log(data);
          if (!res.status === 200) {
            const error = new Error (res.error);
            throw error;
          }
      } catch (err) {
        dispatch({type:'USER', payload:false})
        console.log(err);
        navigate("/");
      }
    };
  
    useEffect(() => {
      callLogoutPage();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    return (
        <div>
        </div>
    )
}

export default Logout
