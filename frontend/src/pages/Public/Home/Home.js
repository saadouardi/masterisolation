import { Header } from '../../../components/Common/Header/Header';
import { Footer } from '../../../components/Common/Footer/Footer';
import { Title } from '../../../components/Common/Title';
import { Slider } from '../../../components/Slider/Slider';
import { Articals } from '../../../components/Articals/Articals';
import { Services } from '../../../components/Services/Services';
import { Clients } from '../../../components/Clients/Clients';
import { Team } from '../../../components/Team/Team';
import Support1 from '../../../assets/images/team/Hassan-Ouardi.webp';
import Support2 from '../../../assets/images/team/Jamal-Jalouti.webp';
import Support3 from '../../../assets/images/team/Saad-Ouardi.jpg';
import './Home.scss';

export const Home = () =>{
    return(
        <>
            <Header/>

            <main>
                <Slider/>

                <section>
                    <Title title='CHECK OUR ARTICALS'></Title>
                    <Articals/>
                </section>

                <section>
                    <Title title='OUR SERVICES'></Title>
                    <Services/>
                </section>

                <section className='Clients__Section'>
                    <Title title='OUR CLIENTS'></Title>
                    <Clients/>
                </section>
                
                <section>
                    <Title title='MEET OUR TEAM'></Title>

                    <div class="team__container">
                        <Team 
                            Profile={Support1}
                            Name='Hassan OUARDI' 
                            Job='co-founder' 
                            Description='leadership, and contribution to the company, while also highlighting their unique skills and experience' 
                            FacebookUrl='https://www.facebook.com/Psycho.Ouardi/' 
                            TwitterUrl='https://twitter.com/PSYCH0_JOKER' 
                            LinkedinUrl='https://www.linkedin.com/in/saad-ouardi-8399b824b/' 
                            GithubUrl='https://github.com/saadouardi'>
                        </Team>

                        <Team 
                            Profile={Support2}
                            Name='Jamal JALOUTI' 
                            Job='The Chief Executive Officer (CEO)' 
                            Description='the highest-ranking employee, responsible for overall leadership, strategic decisions, and the day-to-day operations of the company.'
                            FacebookUrl='https://www.facebook.com/Psycho.Ouardi/' 
                            TwitterUrl='https://twitter.com/PSYCH0_JOKER' 
                            LinkedinUrl='https://www.linkedin.com/in/saad-ouardi-8399b824b/' 
                            GithubUrl='https://github.com/saadouardi'>
                        </Team>

                        <Team 
                            Profile={Support3}
                            Name='Saad Ouardi' 
                            Job='Software Developer' 
                            Description='a professional who specializes in designing, coding, testing, and maintaining software applications and systems.' 
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