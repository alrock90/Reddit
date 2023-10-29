import React, { useState } from "react";
import Styles from "./Card.module.css"
import moment from 'moment'; //npm install moment
import {
    TiArrowDownOutline,
    TiArrowDownThick,
    TiArrowUpOutline,
    TiArrowUpThick,
    TiMessages
} from "react-icons/ti";        //npm install react-icons
import { numberFormat } from "../../functions/NumberFormat";
import { startGetPostComments, toggleShowingComments } from "../../store/redditSlice";
import { useDispatch } from "react-redux";
import { Comment } from "../Comment/Comment";



export const Card = ({ card, index }) => {
    const [error, setError] = useState(false);    
    const [arrowDirection, setArrowDirection] = useState(0)
    const dispatch = useDispatch();

    const handleError = () => {
        setError(true);
    }

    const onClickarrow = (direction) => {
        setArrowDirection(direction);
    }
    const arrowUp = () => {
        return (
            <div>
                {arrowDirection === 1 ? (<TiArrowUpThick style={{ color: 'green' }} />) :
                    (<TiArrowUpOutline style={{ color: 'red' }} />)}
            </div>
        )
    }

    const arrowDown = () => {
        return (
            <div>
                {arrowDirection === -1 ? (<TiArrowDownThick style={{ color: 'green' }} />) :
                    (<TiArrowDownOutline style={{ color: 'red' }} />)}
            </div>
        )
    }

    const onClickComments = () => {
        console.log(`index valor: ${index}`)
        if (!card.showingComments) {
            dispatch(startGetPostComments({ index: index, permalink: card.permalink }));
        } else {
            dispatch(toggleShowingComments(index));
        }
        // dispatch(startGetPostComments({ index: index, permalink: card.permalink }));

    };


    const showComments = () => {
        console.log(`card.showingComments: ${card.showingComments}`)
        if (card.isLoadingComment) {
            return (
                <p>Loading comments</p>
            )
        } else if (card.hasErrorComment) {
            return (
                <p>Error loading the comments</p>
            )
        } else if (card.showingComments) {
            return (
                <div>
                    {card.comments.map(comment => (
                        <Comment comment={comment} />
                    ))
                    }
                </div>

            )
        } else {
            return null;
        }

    }


    //{ card.showingComments ? ({ showingComments }) : <p></p> }

    return (
        <div className={Styles.card}>
            <h3>{card.title}</h3>
            <div className={Styles.cardTop}>
                <div className="cardlike">
                    <button
                        className={Styles.iconAction}
                        onClick={() => onClickarrow(1)}>
                        {arrowUp()}
                    </button>
                    <p>{numberFormat(card.ups)}</p>
                    <button
                        className={Styles.iconAction}
                        onClick={() => onClickarrow(-1)}>
                        {arrowDown()}
                    </button>
                </div>
                <div className={Styles.imgPost}>
                    {error ? null : <img src={card.url} onError={handleError} />}

                </div>
            </div>
            <hr />
            <div className={Styles.cardSub}>
                <p>{`Posted by: ${card.author}`}</p>
                <p>{moment.unix(card.created_utc).fromNow()} </p>
                <button
                    className={Styles.iconAction}
                    onClick={onClickComments}>
                    <TiMessages />
                </button>
            </div>
            <div className={Styles.comments}>
                {showComments()}

            </div>


        </div>
    )


}
