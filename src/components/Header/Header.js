import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-background">
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="visit">Visit</a>
                <a href="/contactus">Contact Us</a>
                <a href="/aboutus">About Us</a>
            </nav>
        </div>
    );
};

export default Header;