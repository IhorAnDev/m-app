import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormStyle/FormsControls";



const MyPosts = React.memo (props => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>
        )

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div className={s.posts}>
            {postsElements}
        </div>
        <AddPostFormRedux onSubmit={onAddPost}/>
    </div>
})

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='Heeey brooo'
                validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm ({form: 'postAddMessageForm'})(AddNewPostForm)

export default MyPosts;