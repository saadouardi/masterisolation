import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Support } from '../../../components/Support/Support';
import Support1 from '../../../assets/images/support/Agent 1.jpg';
import Support2 from '../../../assets/images/support/Agent 2.jpg';
import Support3 from '../../../assets/images/support/Agent 1.jpg';
import './Contact.scss';

export const Contact = () =>{
    return(
        <>
            <Header/>
            <main class="Contact">
                <div className='Form'>
                    <form>
                        <div className='Form__Header'>
                            <h1>Contact Us</h1>
                            <h3>Get in touch with us!</h3>
                        </div>

                        <div className='Form__Body'>
                            <div className='Input__container'>
                                <input type="text" placeholder="First Name" id="firstName"/>
                                <input type="text" placeholder="Last Name" id="lastName"/>
                            </div>

                            <input type="email" placeholder="Email Address" id="email"/>
                            <input type="tel" placeholder="Phone Number" id="phoneNumber"/>
                            <input type="text" placeholder="Subject" id="subject"/>
                            <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            
                            <div>
                                <input type="submit" value="Send"/>
                            </div>
                        </div>
                    </form> 
                </div>
    
                <div class="Support__container">
                    <Support SupportImage={Support1} SupportName='Saad Ouardi' SupportJob='WEB DEVELOPER' SupportPhone='+49 15 216 422 700' SupportEmail='saad.ouardi.dev@gmail.com' SupportLinkedIn='' SupportGitHub='' SupportTwitter='' SupportInstagram='' />
                    <Support SupportImage={Support2} SupportName='Sahar' SupportJob='Frontend Developer' SupportPhone='+212 -- -- -- --' SupportEmail='Sahar@gmail.com' SupportLinkedIn='' SupportGitHub='' SupportTwitter='' SupportInstagram='' />
                    <Support SupportImage={Support3} SupportName='Fatima' SupportJob='Chat Support' SupportPhone='+212 -- -- -- --' SupportEmail='Fatima@gmail.com' SupportLinkedIn='' SupportGitHub='' SupportTwitter='' SupportInstagram='' />
                </div>

            </main>
            <Footer/>
        </>
    )
}