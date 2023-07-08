import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home
            <ul className='flex text-purple-700'>
                <li> <Link to={"/"}> First</Link> </li>
                <li> <Link to={"/friends"}> Friends</Link></li>
                <li><Link to={"/about"}> bout</Link></li>
                <li><Link to={"/contact"}> contct </Link></li>
            </ul>

        </div>
    );
};

export default Home;