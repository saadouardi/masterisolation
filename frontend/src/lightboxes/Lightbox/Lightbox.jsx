import { useState } from 'react';
import './Lightbox.scss';

export const Lightbox = ({Image,Title,PreTitle,Paragraph,Link,Button}) =>{
    const [Lightbox,setLightbox] = useState(true);

    const handleLightbox = () =>{
        setLightbox((prev) => !prev);
        handleDelay();
    }
    const handleDelay = () =>{
        setTimeout(()=>{
            setLightbox(true);
        },10000);
    }
    return(
        <>
            { Lightbox &&
                <div className="Lightbox">
                    <div className="section-1">
                        <div className="close-btn__container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={handleLightbox}><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                        </div>

                        <img src={Image} alt="" />
                    </div>

                    <div className="section-2">
                        <h1>{Title}</h1>
                        <h2>{PreTitle}</h2>
                        <p>{Paragraph}</p>

                        <a href={Link}>
                            <button>{Button}</button>
                        </a>
                    </div>
                </div>
            }
        </>
  );
};