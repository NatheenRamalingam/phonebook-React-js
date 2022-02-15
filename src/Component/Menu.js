import React from 'react';
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <div className='navbar navbar-expand-md navbar-dark bg-primary'>
            <div className='container'>
                <Link to={`/`} className='navbar-brand'>React PhoneBook</Link>
                <button className='navbar-toggler' data-bs-target="#menu" data-bs-toggle="collapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='menu'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to={`/home`} className='nav-link'>PhoneBook List</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={`/create`} className='nav-link'>Create Contacts</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to={`/update/:id`} className='nav-link'>Update Contacts</Link>
                        </li> */}

                    </ul>

                </div>

            </div>
            
        </div>
    )
}

export default Menu
