import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './QuickView.scss';

export const QuickView = ({ProductImage,ProductName,ProductPrice}) => {
    const handleCloseBtn = ()=>{
        document.querySelectorAll('#QuickView__bg').forEach(bg=>{
            bg.style.display= 'none';
        });
    };
    const handlePrice = () =>{
        let Quantity = document.getElementById('Quantity').value;
        document.getElementById('productPrice').textContent = ProductPrice * Quantity;
    }
    onchange = handlePrice;

    return (
        <>  
            <div className='QuickView__bg' id='QuickView__bg'>
                <div className='QuickView' id='QuickView'>
                    <div className='close-btn__container'>
                        <button onClick={()=>{handleCloseBtn()}}>X</button>
                    </div>

                    <div className='Product__Info'>
                        <div>
                            <img src={ProductImage} alt="" />
                        </div>

                        <div className='Product__Details'>
                            <h1>{ProductName}</h1>
                            <h2>$<span id='productPrice'>{ProductPrice}</span></h2>

                            <select>
                                <option value="" key="">Black</option>
                                <option value="" key="">White</option>
                                <option value="" key="">Red</option>
                                <option value="" key="">Blue</option>
                            </select>

                            <label>Quantity</label>
                            <input type="number" min='1' max='5' defaultValue={1} id='Quantity'/>

                            <button>Add to Cart</button>
                            <Link>View More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
