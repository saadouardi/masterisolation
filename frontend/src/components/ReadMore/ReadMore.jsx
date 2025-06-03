import React, { useState } from 'react'
import './ReadMore.scss';

export const ReadMore = ({Title,Content}) => {

    const [ReadMore,setReadMore] = useState(false);
    const handleReadMore = () =>{
        setReadMore(!ReadMore);
    }
    return (
        <>
            <div className="relative__container" id='readMore' onClick={handleReadMore}>
                <div className="Read-More__bar space-between__container" >
                    <h1>{Title}</h1>
                    <button>+</button>
                </div>

                { ReadMore &&
                    <div className="Hidden-Info__container">
                        <ul>
                            <li>{Content}</li>
                        </ul>
                    </div>
                }
                <hr/>
            </div>
        </>
    )
}
