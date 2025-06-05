import React from 'react';
import { Title } from '../../components/Common/Title';
import Artical1 from '../../assets/images/slider/1.jpg';
import Artical2 from '../../assets/images/slider/2.webp';
import Artical3 from '../../assets/images/slider/3.jpg';
import './Artical.scss';

export const Articals = () => {
    const articals = [
        { id: 1, image: Artical1, title: 'Artical 1' },
        { id: 2, image: Artical2, title: 'Artical 2' },
        { id: 3, image: Artical3, title: 'Artical 3' }
    ];
    
    return (
        <section>
            <Title title='CHECK OUR ARTICALS'/>
            <div className="articals">
                {articals.map(artical => (
                    <div 
                        className="artical" 
                        key={artical.id}
                        style={{ backgroundImage: `url(${artical.image})` }}
                    >
                        <button>READ MORE</button>
                    </div>
                ))}
            </div>
        </section>
    )
}