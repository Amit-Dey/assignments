{/* Design nav with logo and signin ans signup button */ }

import { Outlet, Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    // signout 
    const signout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    // checkin if user is logged in or not
    const token = localStorage.getItem('token');
    if (token) {
        return (
            <>

                <nav className="nav">
                    <div className="nav__logo">
                        <Link to="/">E-Bysiness Card</Link>
                    </div>
                    <div className="nav__links">
                        <Link to="/profile">Profile</Link>
                        <Link to="/cards">Cards</Link>
                        <Link onClick={signout}>Sign Out</Link>
                    </div>
                </nav>

                <Outlet />
            </>
        )
    }
    return (
        <>

            <nav className="nav">
                <div className="nav__logo">
                    <Link to="/">E-Bysiness Card</Link>
                </div>
                <div className="nav__links">
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav