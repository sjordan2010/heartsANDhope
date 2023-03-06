import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    const headerLinks = []

  return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/history`}>History</Link>
                </li>
                <li>
                    Who We Are
                </li>
                <li>
                    How We Help
                </li>
                <li>
                    <Link to={`contact`}>Contact Us</Link>
                </li>
                <li>
                    <Link to={`donate`}>Make a Donation</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Header