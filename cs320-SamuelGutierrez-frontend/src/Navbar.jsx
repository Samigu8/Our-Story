import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '10px'}} >
            <Link to="/">Home</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/memories">Memories</Link>
            <Link to="/lovenotes">Love Notes</Link>
        </nav>
    )
}

export default Navbar;