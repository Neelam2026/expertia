import {Link} from "react-router-dom"
import "../Styles/navbar.css"

export const Navbar=()=>{


    return (
       <div id="box">
         <h1>Job Portal</h1>
         <div className="linkDiv">
          <Link to={"/"} className="link">Home</Link>
          <Link to={"/register"} className="link">Register</Link>
          <Link to={"/login"} className="link">Login</Link></div>
       </div>
    )
}