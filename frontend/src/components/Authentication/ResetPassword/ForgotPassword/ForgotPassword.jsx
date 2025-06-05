import './ForgotPassword.scss';

export const ForgotPassword = () => {
    const handleBack = () => {
        window.history.back();
    }

    return(
        <>
            <div className='reset-password-container'>
                <div className='reset-password-content'>
                    <div className='go-back-container'>
                        <div onClick={handleBack}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path></svg>
                        </div>
                    </div>
                    <div className='ForgotPassword__title'>
                        <h1>Forgot Password</h1>
                        <span>Now you can Reset your password so easily with Master Isolation</span>
                        <span>Master Isolation</span>
                    </div>
                    <form>
                        <div className='input__container'>
                            <label>Email</label>
                            <input type="email" placeholder='Email Address' required/>
                        </div>
                        <div>
                            <input type='submit' value='Send' />
                        </div>
                    </form>
                    <div className='Or-Social-Register__container'>
                        <div className='or__container'>
                            <hr/>
                            <span>Or</span>
                            <hr/>
                        </div>
                        <div className='ForgotPassword__container'>
                            <span>Go Back To <a href='/login'>Log In</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
