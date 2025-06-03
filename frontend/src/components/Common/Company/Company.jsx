import React from 'react'
import { Link } from 'react-router-dom';

export const Company = () => {
    return (
        <>
            <Link href="/">
                <div className="Company">
                    <img src='' alt="" className="Company-Logo"/>
                    <span className="commpany__name" id="commpany__name">MASTER ISOLATION</span>
                </div>
            </Link>
        </>
    )
}

