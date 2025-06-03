import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { MainNavbar } from '../../Navbar/Navbar';

import English from '../../../../assets/images/languages/English.png';
import Spanish from '../../../../assets/images/languages/Spanish.png';
import French from '../../../../assets/images/languages/Frensch.png';
import German from '../../../../assets/images/languages/German.png';
import Arabic from '../../../../assets/images/languages/Arabic.png';
import Italian from '../../../../assets/images/languages/Italian.png';
import './HeaderSection.scss';

export const HeaderSection = () =>{
    return(
        <>
            <div class="HeaderSection">
                <MainNavbar/>
                
                <div className='side-2'>
                    <div className='Authentication'>
                        <Link to='/login'>
                            <button className='login'>Login</button>
                        </Link>

                        <Link to='/register'>
                            <button className='register'>Register</button>
                        </Link>
                    </div>

                    <div className='LanguageSelector'>
                        <div className='LanguageSelector__container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                            <span>English</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                        </div>

                        <div className='Main-LanguageSelector-list'>
                            <div className='LanguageSelector__list'>
                                <div className='Language__container active'>
                                    <img src={English} alt="" />
                                    <span>English</span>
                                </div>

                                <div className='Language__container'>
                                    <img src={Spanish} alt="" />
                                    <span>Spanish</span>
                                </div>

                                <div className='Language__container'>
                                    <img src={French} alt="" />
                                    <span>French</span>
                                </div>

                                <div className='Language__container'>
                                    <img src={Italian} alt="" />
                                    <span>Italian</span>
                                </div>

                                <div className='Language__container'>
                                    <img src={German} alt="" />
                                    <span>German</span>
                                </div>

                                <div className='Language__container'>
                                    <img src={Arabic} alt="" />
                                    <span>Arabic</span>
                                </div>
                            </div>  
                        </div>                  
                    </div>
                </div>
                
            </div>
        </>
    );
};