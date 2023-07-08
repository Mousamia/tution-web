import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendDetail = useLoaderData();
    const {name, username, email} = friendDetail;
    console.log(friendDetail);
    return (
        <div>
            <h1 className="text-blue-900 text-3xl">{name}</h1>
            <h1 className="text-blue-900 text-2xl">{username}</h1>
            <h1 className="text-blue-900 text-3xl">{email}</h1>
           
        </div>
    );
};

export default FriendDetail;