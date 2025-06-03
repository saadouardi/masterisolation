import React , { useState } from 'react';
import './ProfileEdit.scss';

export const ProfileEdit = (userFullName,userUsername,userEmail,userPhone,userFacebookUrl,userTwitterUrl) => {

    const [UserInfo,setUserInfo] = useState(true);
    const [BillingInfo,setBillingInfo] = useState(false);

    const handleUserInfo = () =>{
        setUserInfo(true);
        setBillingInfo(false);
    }
    const handleBillingInfo = () =>{
        setUserInfo(false);
        setBillingInfo(true);
    }


    return (
        <>
            <div className='ProfileEdit'>

                <div className='section section1'>
                    <div className='Title__container'>
                        <h1>Edit Profile</h1>
                    </div>

                    <div>
                        <ul>
                            <li className='active' onClick={handleUserInfo}>User info</li>
                            <li onClick={handleBillingInfo}>Billing information</li>
                        </ul>
                    </div>
                </div>
                { UserInfo &&
                <div className='section section2'>
                    <div className='Title__container'>
                        <h3>Profile</h3>
                        <p>Edit your profile information</p>
                    </div>
                    <div className='Inputs__container'>
                        <div className='Input__container'>
                            <label>First Name</label>
                            <input type="text" />
                        </div>

                        <div className='Input__container'>
                            <label>Username</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='Inputs__container'>
                        <div className='Input__container'>
                            <label>Email Address</label>
                            <input type="email" defaultValue={userEmail} />
                        </div>

                        <div className='Input__container'>
                            <label>Phone Number</label>
                            <input type="phone" defaultValue={userPhone} />
                        </div>
                    </div>

                    <div>
                        <div className='Title__container'>
                            <h3>Social Profile</h3>
                        </div>

                        <div className='Inputs__container'>
                            <div className='Input__container'>
                                <label>Facebook</label>
                                <input type="url" placeholder='Facebook Url' defaultValue={userFacebookUrl} />
                            </div>

                            <div className='Input__container'>
                                <label>Twitter</label>
                                <input type="phone" placeholder='Twitter Url' defaultValue={userTwitterUrl} />
                            </div>
                        </div>
                    </div>
                </div>
                }

                { BillingInfo && 
                    <div className='section section2'>
                        <div>
                            <div className='Title__container'>
                                <h3>Billing address</h3>
                                <p>Enter billing address you want to use for payment</p>
                            </div>

                            <div className='Inputs__container'>
                                <div className='Input__container'>
                                    <label>House address</label>
                                    <input type="number"/>
                                </div>
                                <div className='Input__container'>
                                    <label>Apt <span>(optional)</span></label>
                                    <input type="number"/>
                                </div>
                            </div>
                        </div>

                        <div className='Inputs__container'>
                            <div className='Input__container'>
                                <label>City</label>
                                <input type="text"/>
                            </div>

                            <div className='Input__container'>
                                <label>Zip code</label>
                                <input type="number"/>
                            </div>
                        </div>

                        <div className='Inputs__container'>
                            <div className='Input__container'>
                                <label>State</label>
                                <input type="text"/>
                            </div>

                            <div className='Input__container'>
                                <label>Country</label>
                                <input type="text"/>
                            </div>
                        </div>

                    </div>
                }

                <div className="section Upload__container">
                    <button>Upload info</button>
                </div>


            </div>
        </>
    )
}

