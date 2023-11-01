import Styles  from './comment.module.css'
import moment from 'moment'; //npm install moment
import ReactMarkdown from 'react-markdown';

export const Comment = ({ comment }) => {



    return (
        <div className={Styles.comment}>
            <div className={Styles.info}>
                <p>{`Posted by: ${comment.author}`}</p>
                <p>{moment.unix(comment.created_utc).fromNow()} </p>              
            </div>
            <ReactMarkdown>{String(comment.body)}</ReactMarkdown>

        </div>
    )
}