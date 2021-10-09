import styles from "./CommentCard.module.css"

export function CommentCard({comment}) {
    return (
        <div className={styles.commentCard}>
            <p><strong>Name: </strong>{comment.name}</p>
            <p><strong>Content: </strong>{comment.content}</p>
            <p><strong>Created at: </strong>{comment.created_at} </p>
      </div>
    )
}
