import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "red"
    };

    let activeClassName = "underline";

    return (
        <div>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='/home'>Home</NavLink>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='/friends'>Friends</NavLink>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='/about'>About</NavLink>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='/about/culture'>Culture</NavLink>
        </div>
    );
};

export default Header;