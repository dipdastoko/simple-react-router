import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = props => {
    const { id, name, phone, website, address } = props.friend;
    const history = useNavigate();

    const friendStyle = {
        border: '2px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <button onClick={handleFriendClick}>Visit Me 2</button>

        </div>
    );
};

export default Friend;