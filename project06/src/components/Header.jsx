import { NavLink } from 'react-router-dom'
import React from "react"

function Header() {
    return (
        <div>
            Header: 
            <NavLink to="/">Home</NavLink>,
            <NavLink to="/about">About</NavLink>,
            <NavLink to="/contact">Contact</NavLink>,
        </div>
    )
}

export default Header;