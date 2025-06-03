import { Header } from "../../../components/Common/Header/Header";
import { Footer } from "../../../components/Common/Footer/Footer";
import { ProfileCard } from "../../../components/Authentication/Profile/ProfileCard/ProfileCard";
import { ProfileEdit } from "../../../components/Authentication/Profile/ProfileEdit/ProfileEdit";
import User from '../../../assets/images/support/users/user-1.png'
import './Profile.scss';

export const ProfilePage = ()=>{
    return(
        <>
            <Header/>
            <main>
                <div className="ProfilePage">
                    <ProfileCard userName='Saad Ouardi' userUsername='MrJoker' userProfile={User} userMemberSince='16 July 2022'/>
                    <ProfileEdit userFullName='Saad Ouardi' userUsername='MrJoker' userEmail='saadouardi@gmail.com' userPhone='+4915216422700' userFacebookUrl='' userTwitterUrl=''/>
                </div>
            </main>
            <Footer/>
        </>
    )
};