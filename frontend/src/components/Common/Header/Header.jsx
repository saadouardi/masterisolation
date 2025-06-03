import { HeaderSection } from './HeaderSection/HeaderSection';
import { MainHeader } from './MainHeader/MainHeader';
import './Header.scss';

export const Header = () =>{

    return(
        <header>
            <HeaderSection/>
            <MainHeader/>
        </header>
    )
}