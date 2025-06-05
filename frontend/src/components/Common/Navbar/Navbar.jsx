import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from '../Sidebar/Sidebar';
import './Navbar.scss';


export const MainNavbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [open, SetOpen] = useState(false);
    
    const navbarItems = [
        { name: 'home', path: '/' },
        { name: 'store', path: '/store' },
        { name: 'blog', path: '/blog' },
        { name: 'about', path: '/about' },
        { name: 'contact', path: '/contact' }
    ]

    const handleSidebar = () => {        
        SetOpen(!open);
    }

    return (
        <>
            <div className="main-navbar">
                <div className="icon-bg" onClick={handleSidebar}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi more__icon" 
                        viewBox="0 0 16 16"
                    >
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <span>Category</span>
                </div>

                {open &&
                    <Sidebar/>
                }

                {navbarItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
                        value={item.path}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    )
};


export const MobileNavbar = () => {
    const [open, SetOpen] = useState(false);
    const handleSidebar = () =>{
        SetOpen(!open);
    }

    return (
        <>
            <div className="mobile-navbar more__icon_div">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi more__icon" 
                    viewBox="0 0 16 16" 
                    onClick={handleSidebar}
                >
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                </svg>
                {open &&
                    <Sidebar/>
                }
            </div>
        </>
    )
}




