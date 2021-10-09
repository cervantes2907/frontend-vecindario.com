import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import styles from "./PostCard.module.css";

const PostCard = ({post}) => {
    return (
        
        <li className={styles.postCard}>
            <Link to={`/posts/${post.id}`}>
             <div className={styles.title}>{post.name}</div> 
              <div className={styles.createPost}>{post.created_at}</div>   
              
            </Link>
            <Button post={post}/>
        </li>

    )
}

export default PostCard
