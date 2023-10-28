import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Styles from './Posts.module.css'
import { Card } from "../Card/Card";
import { startGetPost } from '../../store/redditSlice'

export const Posts = () => {

   console.log("entre Post")
    const dispatch = useDispatch();

    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit, post, isLoading } = reddit;

    
        useEffect(() => {
            console.log("entre:")
            dispatch(startGetPost(selectedSubreddit));
        }, [selectedSubreddit]);
    
        

   

    /*
 
    */

    return (
        <div >
           {
                isLoading ?
                    <p>Loading</p> :
                    post.map((card) => (
                        <Card key={card.id} card={card}  />
                    ))
            }
        </div>
    )
}