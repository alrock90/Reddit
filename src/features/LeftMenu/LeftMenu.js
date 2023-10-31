import React, { useEffect, useState, useRef } from "react";
import Styles from "./LeftMenu.module.css"
import reddit from "../../api/reddit"
import { getSubtopics } from "../../store/subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeSubreddit } from "../../store/redditSlice";
import { TiArrowRightThick } from "react-icons/ti";
import { CSSTransition } from "react-transition-group";

export const LeftMenu = () => {
    const dispatch = useDispatch();


    const subreddit = useSelector((state) => state.subreddit);
    const { subtopics, isLoading, hasError } = subreddit;

    const nodeRef = useRef(null);
    const nodeRef2 = useRef(null);
    const [navBarActive, setNavBarActive] = useState(false);


    useEffect(() => {
        dispatch(getSubtopics());
    }, []);

    const onClickTopic = (url) => {
        dispatch(changeSubreddit(url));
    }

    const displaySubreddit = () => {
        if (isLoading) {
            return <p>Loading</p>

        } else if (hasError) {
            return <p>Error</p>
        } else if (subtopics.length > 0) {
            return (
                <div className={Styles.subtopics}>
                    {subtopics.map((sub) => (
                        <button onClick={() => onClickTopic(sub.url)} className={Styles.topic}>
                            <div className={Styles.imgtitle}>
                                <img src={sub.header_img} />
                            </div>
                            {navBarActive && <p  >{sub.display_name}</p>}

                        </button>

                    ))}
                </div>
            )

        }
    }

    const onClickArrow = () => {
        setNavBarActive(!navBarActive);
    }


    return (
        <CSSTransition
            in={navBarActive}
            nodeRef={nodeRef2}
            timeout={500}
            classNames={{
                enter: Styles.navEnter,
                enterActive: Styles.navEnterActive,
                exitActive: Styles.navExitActive,
                exit: Styles.navExit,
            }}
        >
            <nav className={Styles.leftMenu} ref={nodeRef2}>
                <CSSTransition
                    in={navBarActive}
                    nodeRef={nodeRef}
                    timeout={500}
                    classNames={{
                        enter: Styles.enter,
                        enterActive: Styles.enterActive,
                        exitActive: Styles.exitActive,
                        exit: Styles.exit,
                    }}
                >
                    <button
                        className={Styles.rotate}
                        onClick={() => onClickArrow()}
                        ref={nodeRef}>
                        <TiArrowRightThick />
                    </button>

                </CSSTransition>
                {displaySubreddit()}
            </nav>
        </CSSTransition>
    )


}
