import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../../assets/images/design/logo/MI-logo.jpg';
import './Page404.scss';
export const Page_404 = ()=>{
    return(
        <>
            <div className='Main-404-page'>
                {/* <!-- COMPANY DIV --> */}
                <div className="company_div">
                    <img src={logo} alt="" classNam=""/>
                    <h1 className="commpany__name">MASTER ISOLATION</h1>
                </div>

                <div className='Text__container'>
                    <h1>PAGE 404</h1>
                    <p>
                        We're sorry, but it seems like the page you're looking for is lost in cyberspace.<br/>
                        Don't worry though, you're not alone! Let's get you back on track. Why not take a<br/> 
                        stroll back to our homepage? There's a world of exciting content waiting for you there. 
                    </p>

                    <div className='btn__container'>
                        <button>
                            <Link to='/'>Go To Home</Link>    
                        </button>
                        <button>
                            <Link to='/'>Previous Page</Link>    
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}