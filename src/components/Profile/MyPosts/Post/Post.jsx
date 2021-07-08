import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


  return (

    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg' />
          {props.message}

        <div>
            <span>Like</span> {props.likesCount}
        </div>
    </div>

  );
}



export default Post;
