import { Header } from '../../../components/Common/Header/Header';
import { Slider } from '../../../components/Slider/Slider';
import { Articals } from '../../../components/Articals/Articals';
import { Services } from '../../../components/Services/Services';
import { Clients } from '../../../components/Clients/Clients';
import { Team } from '../../../components/Team/Team';
import { Footer } from '../../../components/Common/Footer/Footer';
import './Home.scss';

export const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Slider/>
                <Articals/>
                <Services/>
                <Clients/>
                <Team/>
            </main>
            <Footer/>
        </>
    )
}