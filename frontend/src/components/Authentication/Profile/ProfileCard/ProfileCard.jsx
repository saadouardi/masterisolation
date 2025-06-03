import React from 'react'
import './ProfileCard.scss';

export const ProfileCard = ({userName,userUsername,userProfile,userMemberSince}) => {
    return (
        <>
            <div className='ProfileCard'>
                <div className='ProfileCard-content'>
                    <h1>{userName}</h1>
                    <p>@{userUsername}</p>
                    <img src={userProfile} alt="" />
                    <button>Upload New Photo</button>

                    <div className='Image-Restrictions'>
                        <p>Upload a new avatar. Larger image will be resized automatically.</p>
                        <p>Maximum upload size is <strong>1 MB</strong> </p>
                    </div>

                    <h6>Member Since : <strong>{userMemberSince}</strong> </h6>
                </div>
            </div>
        </>
    )
}

