import React from 'react';
import { Title } from '../../components/Common/Title';
import './Artical.scss';

export const Articals = () => {
    return (
        <section>
            <Title title='CHECK OUR ARTICALS'/>
            <div className="articals">
                <div className="artical artical-1">
                    <button>READ MORE</button>
                </div>

                <div className="artical artical-2">
                    <button>READ MORE</button>
                </div>

                <div className="artical artical-3">
                    <button>READ MORE</button>
                </div>
            </div>
        </section>
    )
}