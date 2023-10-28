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



export const Card = ({ card }) => {
    const [error, setError] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(0)
    const handleError = () => {
        setError(true);
    }
    var test= card.ups.toString();

    
    
    
    
    
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
                    {error ? <p></p> : <img src={card.url} onError={handleError} />}

                </div>
            </div>
            <hr />
            <div className={Styles.cardSub}>
                <p>{`Posted by: ${card.author}`}</p>
                <p>{moment.unix(card.created_utc).fromNow()} </p>
                <button
                    className={Styles.iconAction}>
                    <TiMessages />
                </button>
            </div>
        </div>
    )


}
