import React, { useState } from "react";


export const Header = () => {

    const [searchTerm, setSearchTerm] = useState('');
    
   

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
      };

    const onSearchTermSubmit = () => {

    };


return(
    <header>
        <h1>Reddit</h1>
        <form onSubmit={onSearchTermSubmit}>
            <input 
                type="text"
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="search"
            />
            <button
                type="submit"
                onClick={onSearchTermSubmit}
            >Search</button>
        </form>
    </header>
)

}