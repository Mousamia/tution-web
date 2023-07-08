import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = (props) => {
    const friends = useLoaderData();
    // console.log(friends);

    return (
        <div className='grid grid-cols-3'>
            {
                friends.map( friend => <Friend 
                friend={friend}
                key={friend.id}
                ></Friend>)
            }
            
            
        </div>
    );
};

export default Friends;