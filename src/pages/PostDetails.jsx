import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PostDetails.module.css";
import { Spinner } from "../components/Spinner";
import { Api } from "../services/Api";
import { Link } from "react-router-dom";
import { FormComment } from "../components/forms/FormComment";
import { CommentCard } from "../components/CommentCard";
import { AlertEmail } from "../components/AlertEmail";
import { useDispatch, useSelector } from "react-redux";
import { setEmailStore } from "../store/slices/posts";

const PostDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLike, setIsLike] = useState(true);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const [likesCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  

  const dispatch = useDispatch();
  const { email } = useSelector(state => state.posts);

  useEffect(() => {
    setIsLoading(true);
    Api.get(`/posts/${id}`).then((response) => {
      setPost(response.data);
      setLikeCount(response.data.likes_count);
      setIsLoading(false);
    });
  }, [id, comment]);

  if (isLoading) {
    return <Spinner />;
  }

  const like = () => {
    
 /*    if(!email){
      enteredEmail =  prompt('Please enter your email')
      console.log(enteredEmail)
      dispatch(setEmailStore(enteredEmail))
    } */

    const data = {
      like: {
        email_user: "correo@gmail.com"
      },
    };
    Api.post(`/posts/${id}/likes`, data)
      .then(() => {
        setLikeCount((likeCount) => likeCount + 1);
      })
      .catch(() => {
        Api.get(`/posts/${id}/likes?email_user=${data.like.email_user}`, data)
          .then((response) => {
            Api.delete(`/posts/${id}/likes/${response.data.id}`)
              .then((response) => {
                setLikeCount((likeCount) => likeCount - 1);
              })
              .catch((error) => {
                console.log(error);
                return;
              });
          })
          .catch((error) => {
            console.log(error);
            return;
          });
      });
  };

  const dislike = () => {
    const data = {
      dislike: {
        email_user: "e-mail@gmail.com"
      },
    };

    Api.post(`/posts/${id}/dislikes`, data)
      .then(() => {
        setDislikeCount((dislikeCount) => dislikeCount + 1);
      })
      .catch(() => {
        Api.get(`/posts/${id}/dislikes?email_user=${data.dislike.email_user}`, data)
          .then((response) => {
            Api.delete(`/posts/${id}/dislikes/${response.data.id}`)
              .then((response) => {
                setDislikeCount((dislikeCount) => dislikeCount - 1);
              })
              .catch((error) => {
                console.log(error);
                return;
              });
          })
          .catch((error) => {
            console.log(error);
            return;
          });
      });
  };

  const newComment = (comment) => {
    setComment(comment);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.detailsPost}>
          <p className={styles.titlePost}>
            <strong>Title:</strong> {post.name}
          </p>
          <p>
            <strong>Contenido del post:</strong> {post.content}
          </p>
          <p>
            <strong>Email del usuario:</strong> {post.email_user}
          </p>
          <div className={styles.containerButton}>
            <button type="button" onClick={() => like()}>
              {likesCount} Like
            </button>
            <button type="button" onClick={() => dislike()}>
              {dislikeCount} Dislike
            </button>
            <button type="button">{post.comments_count} Comments</button>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button type="button">Prev</button>
        </Link>
      </div>
      <FormComment newComment={newComment} />

      <div>
        {post.comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default PostDetails;
