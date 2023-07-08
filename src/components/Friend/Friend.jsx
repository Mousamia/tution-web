import React from 'react';

const Friend = ({ friend }) => {
    const { name, email, id, username } = friend;
    return (
        <div className='m-4 p-4 border-4 border-red-600 '>
            <h2 className="text-4xl text-black-800"> {name}</h2>
            <h2 className="text-2xl text-purple-800"> {email}</h2>
            <h2 className="text-xl text-purple-800"> {username}</h2>
            <button
                className="p-2 rounded-md text-white bg-violet-700"> See details
            </button>

        </div>
    );
};

export default Friend;