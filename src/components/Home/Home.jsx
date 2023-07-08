import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <h1 className='text-3xl font-extrabold'>Home</h1>
            <ul className='flex gap-5 text-purple-700'>
                <li> <Link to={"/"}> First</Link> </li>
                <li> <Link to={"/friends"}> Friends</Link></li>
                <li><Link to={"/about"}> about</Link></li>
                <li><Link to={"/contact"}> Contcat </Link></li>
            </ul>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;