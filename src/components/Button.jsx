import React from 'react'
import styles from './Button.module.css'

const Button = ({ post }) => {
    return (
        <div className={styles.containerButton}>           
            <button type="submit">{post.likes_count} Like</button>
            <button type="submit">{post.dislikes_count} Dislike</button>
            <button type="submit">{post.comments_count} Comments</button> 
        </div>
    )
}

export default Button
