import React, { useEffect, useState, useRef } from "react";
import Styles from "./LeftMenu.module.css"
import { getSubtopics } from "../../store/subredditSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeSubreddit } from "../../store/redditSlice";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import { FaReddit } from "react-icons/fa"

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
                                {sub.header_img != null ? <img src={sub.header_img} alt="imageCard"/> : <FaReddit className={Styles.icon} />}                                
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
            }}>
            <nav className={Styles.leftMenu} ref={nodeRef2}>
                <CSSTransition
                    in={navBarActive}
                    nodeRef={nodeRef}
                    timeout={500}
                    classNames={{
                        enterDone: Styles.enterDone,
                        enter: Styles.enter,
                        enterActive: Styles.enterActive,
                        exitActive: Styles.exitActive,
                        exit: Styles.exit,
                        exitDone: Styles.exitDone,
                    }}
                >
                    <button
                        className={Styles.rotate}
                        onClick={() => onClickArrow()}
                        ref={nodeRef}>
                        <MdKeyboardDoubleArrowRight />
                    </button>

                </CSSTransition>
                {displaySubreddit()}
            </nav>
        </CSSTransition>
    )


}
