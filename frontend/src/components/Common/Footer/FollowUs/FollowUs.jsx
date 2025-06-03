import React from 'react'
import Facebook from '../../../../assets/Icons/SocialMedia/facebook.png';
import Instagram from '../../../../assets/Icons/SocialMedia/instagram.png';
import Twitter from '../../../../assets/Icons/SocialMedia/twitter.png';
import Linkedin from '../../../../assets/Icons/SocialMedia/linkedin.png';
import './FollowUs.scss';

export const FollowUs = () => {
    return (
        <>
            <div className="FollowUs">
                <h1>FOLLOW US</h1>
            
                <div className="SocialMedia">
                    <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                        <img src={Facebook} alt="" />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                        <img src={Instagram} alt="" />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                        <img src={Twitter} alt="" />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                        <img src={Linkedin} alt="" />
                    </a>
                </div>
                <hr/>
            </div>
        </>
    )
}
