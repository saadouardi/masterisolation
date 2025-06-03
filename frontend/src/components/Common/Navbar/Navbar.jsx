import { Link } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from '../Sidebar/Sidebar';
import './Navbar.scss';


export const MainNavbar = ()=>{

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (e) => {
        // Remove 'active' class from previous active link
        document.querySelectorAll('.MainNavbar a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        e.target.classList.add('active');

        // Set the active link state for re-rendering purposes (optional)
        setActiveLink(e.target.innerText);
    };
    const [SidebarMenu,SetSidebar] = useState(false);

    const handleSidebar = () =>{        
        SetSidebar(!SidebarMenu);
    }

    return (
        <>
            <div className="MainNavbar">
                <div className="Icon-Bg" onClick={handleSidebar}>
                    <svg id="CategoryMenu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi more__icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/></svg>
                    <span id="CategoryMenu">Category</span>
                </div>
                { SidebarMenu &&
                    <Sidebar/>
                }

                <Link to="/" onClick={handleLinkClick} value='home'>HOME</Link>
                <Link id='store' to="/store" onClick={handleLinkClick}>STORE</Link>
                <Link to="/blog" onClick={handleLinkClick}>BLOG</Link>
                <Link to="/about" onClick={handleLinkClick}>ABOUT</Link>
                <Link to="/contact" onClick={handleLinkClick}>CONTACT</Link>
            </div>
        </>
    )
};


export const MobileNavbar = () => {
    const [SidebarMenu,SetSidebar] = useState(false);
    const handleSidebar = () =>{
        SetSidebar(!SidebarMenu);
    }

    return (
        <>
            <div className="MobileNavbar more__icon_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi more__icon" viewBox="0 0 16 16" onClick={handleSidebar}><path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/></svg>
                { SidebarMenu &&
                    <Sidebar/>
                }
            </div>
        </>
    )
}




