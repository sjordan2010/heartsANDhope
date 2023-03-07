import React from 'react'
import { Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from "react-router-dom";
import Logo from "./assets/HaH_logo-removebg-preview.png"


function Header() {

  return (
    <header>
        <nav>
        <div className='pageTop'>
            <Link to="/"><img id="header-logo" src={Logo} alt="logo" /></Link>
            <div className="top-buttons">
                <Button variant="contained" color="warning" href="/donate">Donate Now</Button>
                <Button variant="outlined" color="warning" href="/contact">Contact Us</Button>
            </div>
        </div>
        <div className="navbar">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={`/`}>HOME</Link></li>
                    <li><Link to={`/history`}>HISTORY</Link></li>
                    <li tabIndex={0}>
                        <a>WHO WE ARE<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="listitem1 p-2 bg-base-100">
                            <li><Link to={'/who-we-are/BoD'}>Board of Directors</Link></li>
                            <li><Link to={'/who-we-are/members'}>Members</Link></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <a>HOW WE HELP<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="listitem2 p-2 bg-base-100">
                            <li className="listitem"><Link to={'/how-we-help/outreach'}>Outreach</Link></li>
                            <li><Link to={'/how-we-help/events'}>Events</Link></li>
                        </ul>
                    </li>
                </ul>
        </div>
        </nav>
     </header>
    )
}

export default Header


