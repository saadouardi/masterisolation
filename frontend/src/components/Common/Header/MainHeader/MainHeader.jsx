import React from 'react';
import { Link } from "react-router-dom";
import { UserMenu } from '../../UserMenu/UserMenu';
import { Search } from '../../Search/Search';
import logo from '../../../../assets/images/logos/company.png';
import './MainHeader.scss';


export function MainHeader() {
    return (
        <>
            <div className="MainHeader">
                <div className='Header'>
                    <Link to="/">
                        <div className="Company">
                            <img src={logo} alt="" className="Company-Logo"/>
                            <span className="commpany__name" id="commpany__name">MASTER ISOLATION</span>
                        </div>
                    </Link>
                    <Search/>
                </div>


                <UserMenu/>
            </div>
        </>
    )
}
