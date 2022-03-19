import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
   <div className="container-flux">
   <div className="row">
     <div className="row">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
     
     <Link to="/" className="navbar-brand ml-5">
       React Redux Contact App Navbar
     </Link>
   
   </nav>
     </div>
   </div>
     
   </div>
  );
}

export default Navbar;
