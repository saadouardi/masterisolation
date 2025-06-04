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

export const Home = () => {
    const teamMembers = [
        {
            Profile: Support1,
            Name: 'Hassan OUARDI',
            Job: 'co-founder',
            Description: 'leadership, and contribution to the company, while also highlighting their unique skills and experience',
            FacebookUrl: 'https://www.facebook.com/Psycho.Ouardi/',
            TwitterUrl: 'https://twitter.com/PSYCH0_JOKER',
            LinkedinUrl: 'https://www.linkedin.com/in/saad-ouardi-8399b824b/',
            GithubUrl: 'https://github.com/saadouardi'
        },
        {
            Profile: Support2,
            Name: 'Jamal JALOUTI',
            Job: 'The Chief Executive Officer (CEO)',
            Description: 'the highest-ranking employee, responsible for overall leadership, strategic decisions, and the day-to-day operations of the company.',
            FacebookUrl: 'https://www.facebook.com/Psycho.Ouardi/',
            TwitterUrl: 'https://twitter.com/PSYCH0_JOKER',
            LinkedinUrl: 'https://www.linkedin.com/in/saad-ouardi-8399b824b/',
            GithubUrl: 'https://github.com/saadouardi'
        },
        {
            Profile: Support3,
            Name: 'Saad Ouardi',
            Job: 'Software Developer',
            Description: 'a professional who specializes in designing, coding, testing, and maintaining software applications and systems.',
            FacebookUrl: 'https://www.facebook.com/Psycho.Ouardi/',
            TwitterUrl: 'https://twitter.com/PSYCH0_JOKER',
            LinkedinUrl: 'https://www.linkedin.com/in/saad-ouardi-8399b824b/',
            GithubUrl: 'https://github.com/SaadOuardi'
        }
    ];

    return (
        <>
            <Header/>

            <main>
                <Slider/>
                <Articals/>
                <Services/>
                <Clients/>
                <section>
                    <Title title='MEET OUR TEAM'/>

                    <div class="team__container">
                        {teamMembers.map((member, index) => (
                            <Team 
                                key={index}
                                Profile={member.Profile}
                                Name={member.Name} 
                                Job={member.Job} 
                                Description={member.Description} 
                                FacebookUrl={member.FacebookUrl} 
                                TwitterUrl={member.TwitterUrl} 
                                LinkedinUrl={member.LinkedinUrl} 
                                GithubUrl={member.GithubUrl}>
                            </Team>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}