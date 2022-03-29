import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreindDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    return (
        <div>
            <h3>Friend Details of: {friendId}</h3>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.company?.name}</h4>
            {/* <p>Works at: {friend.company.name}</p> */}
        </div>
    );
};

export default FreindDetail;