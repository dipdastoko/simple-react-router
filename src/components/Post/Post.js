import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = props => {
    const { title, id } = props.post;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <br />
            <button onClick={handleClick}>Click to see detail</button>
        </div>
    );
};

export default Post;