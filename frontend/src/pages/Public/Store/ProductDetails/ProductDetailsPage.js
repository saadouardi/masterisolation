import { Header } from '../../../../components/Common/Header/Header';
import { Footer } from '../../../../components/Common/Footer/Footer';
import { ProductDetails } from '../../../../components/Store/ProductDetails/ProductDetails';
export const ProductDetailsPage = (ProductName) =>{
    return(
        <>
            <Header/>
            <main>
                <ProductDetails productName={ProductName}/>
            </main>
            <Footer/>
        </>
    );
};