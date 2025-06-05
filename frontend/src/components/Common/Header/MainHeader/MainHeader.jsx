import React from 'react';
import { Link } from "react-router-dom";
import { UserDropdown } from '../../UserMenu/UserMenu';
import { Search } from '../../Search/Search';
import logo from '../../../../assets/images/logos/company.png';
import './MainHeader.scss';


export function MainHeader() {
    return (
        <>
            <div className="main-header">
                <div className='header-content'>
                    <Link to="/">
                        <div className="company-container">
                            <img 
                                src={logo} 
                                alt="master-isolation-logo" 
                                className="company-logo"
                            />
                            <span className="commpany-name">MASTER ISOLATION</span>
                        </div>
                    </Link>
                    <Search/>
                </div>
                <UserDropdown/>
            </div>
        </>
    )
}
