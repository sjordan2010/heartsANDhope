import React from 'react'
import Logo from "./assets/HaH_logo-removebg-preview.png";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer p-10 text-black flex-between">
      <div className="footer1">
        <img src={Logo} className="footer-logo"/>
        <address>Hearts and Hope Foundation Inc. <br></br>
          P.O. Box 596 <br></br>
          Terrell, NC 28682
        </address>
      </div> 
      <div className="footer2">
        <span className="footer-title">Connect on Facebook</span>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.facebook.com/heartsandhopefoundation"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer