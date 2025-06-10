import { FollowUs } from './FollowUs/FollowUs';
import './Footer.scss';
export const Footer = () => {
    return(
        <footer>
            <FollowUs/>
            <div className="footer__row-2 menus">
                <div className="menu menu-1">
                    <h2>LINKS</h2>
                    <ul>
                        <li><a href="https://www.google.com/">HOME</a></li>
                        <li><a href="https://www.google.com/">SHOP</a></li>
                        <li><a href="https://www.google.com/./Subpages/blog.html">BLOG</a></li>
                        <li><a href="https://www.google.com/">ABOUT</a></li>
                        <li><a href="https://www.google.com/">CONTACT US</a></li>
                    </ul>
                </div>
                <div className="menu menu-2">
                    <h2>
                        <u className="underline">GET HELP</u> 
                    </h2>
                    <ul>
                        <li><a href="https://www.google.com/">FAQ</a></li>
                        <li><a href="https://www.google.com/">SHOPPING</a></li>
                        <li><a href="https://www.google.com/">RETURN</a></li>
                        <li><a href="https://www.google.com/">ORDER STATUS</a></li>
                        <li><a href="https://www.google.com/">PAYMENT OPTIONS</a></li>
                    </ul>
                </div>
                <div className="menu menu-2">
                    <h2>
                        <u className="underline">GET HELP</u> 
                    </h2>
                    <ul>
                        <li><a href="https://www.google.com/">FAQ</a></li>
                        <li><a href="https://www.google.com/">SHOPPING</a></li>
                        <li><a href="https://www.google.com/">RETURN</a></li>
                        <li><a href="https://www.google.com/">ORDER STATUS</a></li>
                        <li><a href="https://www.google.com/">PAYMENT OPTIONS</a></li>
                    </ul>
                </div>                
                <div className="menu menu-3">
                    <h2>
                        <u>SUPPORT</u>
                    </h2>
                    <ul>
                        <li><a href="https://www.google.com/">CONTACT US</a></li>
                        <li><a href="https://www.google.com/">EMAIL US</a></li>
                        <li><a href="https://www.google.com/">LIVE EGENT</a></li>
                        <li><a href="https://www.google.com/">CALL US</a></li>
                        <li><a href="https://www.google.com/">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__row-3 reach_us__div">
            <hr/>
                <div className="contact phone__div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-plus" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/><path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/></svg>
                    <h2>+212694341883</h2>
                </div>
                <div className="contact email__div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
                    <h2>masterisolation@gmail.com</h2>
                </div>
                <div className="contact location__div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg>
                    <h2>CASABLANCA,20620</h2>
                </div>
            </div>
            <div className='Newsletter'>
                <h2><u>NEWSLETTER</u></h2>
                <h1>Subscribe our newsletter to stay updated every moment</h1>
                <div className="newsletter__div">
                    <input type="text" className="newsletter__input" placeholder="Enter a valid email address..."/>
                    <button type="submit" className="subscrive__button">SUBSCRIBE</button>
                </div>
            </div>
            <div className="copyright_div">
                <p>Copyright  &copy;{new Date().getFullYear()} Master Isolation, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}