import React, { useState, useEffect } from 'react';
import './Blog.scss';

export const Blog = ({BlogDate,BlogImg,BlogTitle,BlogText,BlogLink})=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="blog-div skeleton">
                <div className="blog-img-div skeleton">
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-img"></div>
                </div>
                <div className="blog-text-div">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-button"></div>
                </div>
            </div>
        );
    }

    return(
        <>
            <div className="blog-div">
                {/* <!-- BLOG - IMAGE DIV  --> */}
                <div className="blog-img-div">
                    <h1 className="blog-date">{BlogDate}</h1>
                    <img src={BlogImg} alt=""/>
                </div>

                {/* <!-- BLOG -TEXT DIV  --> */}
                <div className="blog-text-div">
                    <h1>{BlogTitle}</h1>
                    <p>{BlogText}</p>
                    <button>
                        <a href={BlogLink}>Read More</a>
                    </button>
                </div>
            </div>

        </>
    );
};









