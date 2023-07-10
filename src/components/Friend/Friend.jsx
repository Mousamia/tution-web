import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { name, email, id, username } = friend;
    let messge;
    const seeDetails = (id) => {
        // console.log("Id", id);
        if(true) {
             messge = <h2>  somis </h2>
        }
    }




    return (
        <div className='m-4 p-4 border-4 border-red-600 '>
            <h2 className="text-4xl text-black-800"> {name}</h2>
            <h2 className="text-2xl text-purple-800"> {email}</h2>
            <h2 className="text-xl text-purple-800"> {username}</h2>
            <button onClick={() => seeDetails(id)}
                className="p-2 rounded-md text-white bg-violet-700">
                {/* use the first slsh carefully */}
                <Link to={`/friend/${id}`}> See details</Link>
            </button>
            <h2> {messge} </h2>


        </div>


    );
};

export default Friend;