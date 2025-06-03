import { Header } from '../../../../components/Common/Header/Header';
import { Footer } from '../../../../components/Common/Footer/Footer';
import { Shop } from '../../../../components/Store/Shop/Shop';

export const Store = () =>{
    return(
        <>
            <Header/>
                <main>
                    <Shop/>
                </main>
            <Footer/>
        </>
    )
}