import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>GameSlot</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </nav>
    </header>
);

export default Header;
