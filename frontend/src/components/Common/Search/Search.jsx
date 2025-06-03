import React from 'react'
import './Search.scss';

export const Search = () => {
    return (
        <>
            <div className="Search">

                {/* <!-- CATEGORY DROPDOWN --> */}
                <select name="" id="category__input" className="category__input">
                    <option value="">All Category</option>
                    {/* <!-- CATEGORY 1 --> */}
                    <optgroup label="COLD STORAGE">
                        <option value="">TYPE 1</option>
                        <option value="">TYPE 2</option>
                        <option value="">TYPE 3</option>
                    </optgroup>

                    {/* <!-- CATEGORY 2 --> */}
                    <optgroup label="HOT STORAGE">
                        <option value="">TYPE 1</option>
                        <option value="">TYPE 2</option>
                        <option value="">TYPE 3</option>
                    </optgroup>
                </select>
                
                {/* <!-- SEARCH INPUT --> */}
                <input type="search" name="search" id="search__input" className="search__input" placeholder="Search..."/>
                
                {/* <!-- SEARCH BTN --> */}
                <div className='Search-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi search__button" viewBox="0 0 16 16"><path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/></svg>
                </div>
            </div>
        </>
    )
}