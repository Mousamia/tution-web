import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    console.log(to);
    console.log(children);
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {/* other code */}
                  </NavLink>
            
        </div>
    );
};

export default ActiveLink;