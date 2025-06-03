import { Product } from '../Product/Product';
import Product1 from '../../../assets/images/products/product-1.webp';
import Product2 from '../../../assets/images/products/product-2.webp';
import Product3 from '../../../assets/images/products/product-3.webp';
import Product4 from '../../../assets/images/products/product-4.webp';
import Product5 from '../../../assets/images/products/product-5.webp';
import Product6 from '../../../assets/images/products/product-6.webp';
import Product7 from '../../../assets/images/products/product-7.webp';
import Product8 from '../../../assets/images/products/product-8.webp';
import Product9 from '../../../assets/images/products/product-9.webp';
import Product10 from '../../../assets/images/products/product-10.webp';
import Product11 from '../../../assets/images/products/product-11.webp';
import Product12 from '../../../assets/images/products/product-12.webp';
import Product13 from '../../../assets/images/products/product-13.webp';
import Product14 from '../../../assets/images/products/product-14.webp';
import Product15 from '../../../assets/images/products/product-15.webp';
import Product16 from '../../../assets/images/products/product-16.webp';
import Product17 from '../../../assets/images/products/product-17.webp';
import Product18 from '../../../assets/images/products/product-18.webp';
import Product19 from '../../../assets/images/products/product-19.webp';
import Product20 from '../../../assets/images/products/product-20.webp';
import Product21 from '../../../assets/images/products/product-21.webp';
import './Shop.scss';

export const Shop = () =>{

    return(
        <>
            <div className="Products-List__container">
                <Product ProductImage={Product1} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='19.99' ProductDiscounterPrice='15.99'/>
                <Product ProductImage={Product2} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='3.99' ProductDiscounterPrice='2.99' />
                <Product ProductImage={Product3} ProductName='PureBliss Memory' ProductCurrency='$' ProductRegularPrice='5.99' ProductDiscounterPrice='2.99' />
                <Product ProductImage={Product4} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='17.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product5} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='23.99' ProductDiscounterPrice='18.99' />
                <Product ProductImage={Product6} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99'  />
                <Product ProductImage={Product7} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product8} ProductName='PureBliss Memory' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product9} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product10} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='5.99' ProductDiscounterPrice='4.99' />
                <Product ProductImage={Product11} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='3.99' ProductDiscounterPrice='2.99'  />
                <Product ProductImage={Product12} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='35.99' ProductDiscounterPrice='25.99' />
                <Product ProductImage={Product13} ProductName='PureBliss Memory' ProductCurrency='$' ProductRegularPrice='5.99' ProductDiscounterPrice='3.99' />
                <Product ProductImage={Product14} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product15} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product16} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='9.99'  />
                <Product ProductImage={Product17} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='12.99' />
                <Product ProductImage={Product18} ProductName='PureBliss Memory' ProductCurrency='$' ProductRegularPrice='45.99' ProductDiscounterPrice='25.99' />
                <Product ProductImage={Product19} ProductName='Zenith Smartwatch' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='25.00' />
                <Product ProductImage={Product20} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='15.99' ProductDiscounterPrice='10.99' />
                <Product ProductImage={Product21} ProductName='EverGlow LED Desk' ProductCurrency='$' ProductRegularPrice='12.99' ProductDiscounterPrice='8.99' />
            </div>
        </>
    );
};
