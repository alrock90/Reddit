import React, { useState } from "react";
import { changeSearchTerm } from '../../store/redditSlice'
import { useDispatch } from "react-redux";
import { FaReddit } from "react-icons/fa"

export const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');



    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(searchTerm));
    };


    return (
        <header>
            <FaReddit className="App-logo"/>
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
                    aria-label="Search"
                >Search</button>
            </form>
        </header>
    )

}