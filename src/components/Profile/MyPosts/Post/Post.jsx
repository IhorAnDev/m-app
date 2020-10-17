import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>

)
}
export default Post;