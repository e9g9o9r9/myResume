import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/formsControl/FormsControl";

const maxLength = maxLengthCreator(10);


let addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='new Post' validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(addPostForm)


const MyPosts = (props) => {


    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    )
}




export default MyPosts;
