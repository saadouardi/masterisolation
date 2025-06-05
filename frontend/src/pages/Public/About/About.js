import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Team } from '../../../components/Team/Team';
import About1 from '../../../assets/images/blog/blog2.webp';
import './About.scss';

export const About = () =>{
    return(
        <>
            <Header/>
            <main>
                <div 
                    className="cover-div about-cover" 
                    style={{
                        backgroundImage:`url(${About1})`, 
                        height:'300px'
                        }}
                >
                    <h1>#About</h1>
                    <h5>Know who are we , what we do and how we do</h5>
                </div>

                <div className="about-container">
                    <div className="about-text-container">
                        <h6>
                            Welcome to our online store, where passion for sport meets the epitome of athletic excellence. 
                            At <span style={{color: 'gold'}}>Master Isolation</span>, we take pride in bringing the iconic spirit of Nike
                            to your fingertips. Our journey began with a shared love for sports, fitness, and the relentless 
                            pursuit of greatness. As avid enthusiasts of the Swoosh, we've curated a collection that encapsulates 
                            the essence of <span style={{color: 'gold'}}>Master Isolation's</span> innovation, style, and performance.
                        </h6>
                        <h6>
                            Welcome to our online store, where passion for sport meets the epitome of athletic excellence. 
                            At <span style={{color: 'gold'}}>Master Isolation</span>, we take pride in bringing the iconic spirit of Nike
                            to your fingertips. Our journey began with a shared love for sports, fitness, and the relentless 
                            pursuit of greatness. As avid enthusiasts of the Swoosh, we've curated a collection that encapsulates 
                            the essence of <span style={{color: 'gold'}}>Master Isolation's</span> innovation, style, and performance.
                        </h6>
                    </div>
                </div>
                <Team/>
            </main>

            <Footer/>
        </>
    )
}