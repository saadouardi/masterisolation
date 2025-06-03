import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Title } from '../../../components/Common/Title';
import { Team } from '../../../components/Team/Team';
import Support1 from '../../../assets/images/team/Hassan-Ouardi.webp';
import Support2 from '../../../assets/images/team/Jamal-Jalouti.webp';
import Support3 from '../../../assets/images/team/Saad-Ouardi.jpg';
import About1 from '../../../assets/images/blog/blog2.webp';
import './About.scss';

export const About = () =>{
    return(
        <>
            <Header/>
    
            <main class="AboutPage">
                <div class="cover-div about-cover" style={{backgroundImage:`url(${About1})`, height:'300px'}}>
                    <h1>#About</h1>
                    <h5>Know who are we , what we do and how we do</h5>
                </div>

                <div class="About__container">

                    <div class="About-Text__container">
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

                <section>
                    <Title title='MEET OUR TEAM'></Title>

                    <div class="team__container">
                        <Team 
                            Profile={Support1}
                            Name='Hassan OUARDI' 
                            Job='CEO' 
                            Description='Im the CEO' 
                            FacebookUrl='https://www.facebook.com/Psycho.Ouardi/' 
                            TwitterUrl='https://twitter.com/PSYCH0_JOKER' 
                            LinkedinUrl='https://www.linkedin.com/in/saad-ouardi-8399b824b/' 
                            GithubUrl='https://github.com/SaadOuardi'>
                        </Team>

                        <Team 
                            Profile={Support2}
                            Name='Jamal JALOUTI' 
                            Job='MANAGER' 
                            Description='Im the Manager' 
                            FacebookUrl='https://www.facebook.com/Psycho.Ouardi/' 
                            TwitterUrl='https://twitter.com/PSYCH0_JOKER' 
                            LinkedinUrl='https://www.linkedin.com/in/saad-ouardi-8399b824b/' 
                            GithubUrl='https://github.com/SaadOuardi'>
                        </Team>

                        <Team 
                            Profile={Support3}
                            Name='Saad Ouardi' 
                            Job='Web Developer' 
                            Description='Im the Website Developer' 
                            FacebookUrl='https://www.facebook.com/Psycho.Ouardi/' 
                            TwitterUrl='https://twitter.com/PSYCH0_JOKER' 
                            LinkedinUrl='https://www.linkedin.com/in/saad-ouardi-8399b824b/' 
                            GithubUrl='https://github.com/SaadOuardi'>
                        </Team>
                    </div>

                </section>
            </main>

            <Footer/>
        </>
    )
}