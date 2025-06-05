import React, { useState, useEffect, useCallback } from 'react';
import sliderImg1 from '../../assets/images/slider/slider1.webp';
import sliderImg2 from '../../assets/images/slider/slider2.png';
import sliderImg3 from '../../assets/images/slider/slider3.jpg';
import './Slider.scss';

export const Slider = () => {
    let sliderBackground = [ sliderImg1 , sliderImg2 , sliderImg3];
    const [index, setIndex] = useState(0);

    const toggleRight = useCallback(() => {
        setIndex((prevIndex) => (prevIndex === sliderBackground.length - 1 ? 0 : prevIndex + 1));
    }, [sliderBackground.length]);

    useEffect(() => {
        const intervalId = setInterval(toggleRight, 4000);
        return () => clearInterval(intervalId);
    }, [toggleRight]);


    return (
        <div className="Slider" style={{ backgroundImage: `url(${sliderBackground[index]})`}}>
            {/* COMPANY */}
            <div className="company__div">
                <div className="company-name__div">
                    <h1 className="company-name">Master Isolation</h1>
                </div>
            </div>
            <div className="content__slider">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi left_button" 
                    id="left_button" 
                    viewBox="0 0 16 16" 
                    onClick={toggleRight}
                >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
                </svg>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi right_button" 
                    id="right_button" 
                    viewBox="0 0 16 16" 
                    onClick={toggleRight}
                >
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                </svg>
            </div>

            <div className="circles">
                {sliderBackground.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={idx === index ? 'circle active' : 'circle'}
                    ></div>
                ))}
            </div>
        </div>
    );
};
