import React, { useState } from 'react';
import Google from '../../../assets/images/socialmedia/google.png';
import Apple from '../../../assets/images/socialmedia/apple.png';
import Facebook from '../../../assets/images/socialmedia/facebook.png';
import './Register.scss';

export const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeToTerms: false,
        agreeToPrivacyPolicy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Data inserted successfully');
            } else {
                alert('Error inserting data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error inserting data');
        }
    };

    const handleBack = ()=>{
        window.history.back();
    }

    return(
        <>
            <div className='Main-Register'>
                <div className='Register'>
                    <div className='GoBack__container'>
                        <div onClick={handleBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path></svg>
                        </div>
                    </div>

                    <div className='Register__title'>
                        <h1>Register Now</h1>
                        <span>Now you can register so easily with Master Isolation</span>
                        <span>Master Isolation</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='input__container'>
                            <label>Name</label>
                            <input type="text" placeholder='Full Name' required onClick={handleChange }/>
                        </div>

                        <div className='input__container'>
                            <label>Email</label>
                            <input type="email" placeholder='Email Address' required onClick={handleChange }/>
                        </div>

                        <div className='input__container password__container'>
                            <label>Password</label>
                            <input type="password" placeholder='New Password' required onClick={handleChange }/>
                            <div className='toogle-password-icons__container'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                            </div>
                        </div>

                        <div className='AgreeToTerms__container'>
                            <div>
                                <label><input type="checkbox"/> I agree to the terms & conditions</label>
                            </div>
                        </div>

                        <div>
                            <input type='submit' value='Register' />
                        </div>
                    </form>

                    <div className='Or-Social-Register__container'>
                        <div className='or__container'>
                            <hr/>
                            <span>Or</span>
                            <hr/>
                        </div>

                        <div className='Login-Media__container'>
                            {/* GOOGLE */}
                            <div className='Social-Media__bg'>
                                <img src={Google} alt="" />
                            </div>

                            {/* APPLE */}
                            <div className='Social-Media__bg'>
                                <img src={Apple} alt="" />
                            </div>

                            {/* FACEBOOK */}
                            <div className='Social-Media__bg'>
                                <img src={Facebook} alt="" />
                            </div>
                        </div>

                        <div className='Login__container'>
                            <span>Already Have An Account? <a href='/login'>Log In</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};