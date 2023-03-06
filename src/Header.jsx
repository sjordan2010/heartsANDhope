import React from 'react'
import { Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from "react-router-dom";


function Header() {

  return (
    <header>
        <div className='pageTop'>
            <img src="#" alt="logo" />
            <div className="top-buttons">
                <Button variant="contained" color="warning" href="/donate">Donate Now</Button>
                <Button variant="outlined" color="warning" href="/contact">Contact Us</Button>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>HOME</Link>
                </li>
                <li>
                    <Link to={`/history`}>HISTORY</Link>
                </li>
                <li>
                    WHO WE ARE
                </li>
                <li>
                    HOW WE HELP
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header