import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    const { id, name, phone, website, address } = props.friend;
    const friendStyle = {
        border: '2px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to='/friends'>Visit Me</Link>
        </div>
    );
};

export default Friend;