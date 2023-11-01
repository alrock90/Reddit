import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from "../Card/Card";
import { startGetAllPosts, selectAllPostFilter } from '../../store/redditSlice'

export const Posts = () => {

   console.log("entre Post")
    const dispatch = useDispatch();

    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit,  isLoading } = reddit;
    const allPostFilter = useSelector(selectAllPostFilter);

    
        useEffect(() => {
            console.log("entre:")
            dispatch(startGetAllPosts(selectedSubreddit));
        }, [selectedSubreddit],dispatch);
    
        

   

    /*
 
    */

    return (
        <div >
           {
                isLoading ?
                <p>Loading</p> :
                allPostFilter.map((card,index) => (
                    <Card key={card.id} card={card} index={index} />
                ))
            }
        </div>
    )
}