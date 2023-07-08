import React from 'react';
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <h1 className='text-3xl font-extrabold'>Home</h1>
            <ul className='flex gap-5 text-purple-700'>
                <li> <Link to={"/"}> First</Link> </li>
                <li> <ActiveLink to={"/friends"}> Friends</ActiveLink></li>
                <li><Link to={"/about"}> about</Link></li>
                <li><Link to={"/contact"}> Contcat </Link></li>
            </ul>
            <Outlet></Outlet>
            <div>

                {
                    navigation.state === 'idle' && 'loading......'

                }
            </div>



        </div>
    );
};

export default Home;