import styles from "./FormComment.module.css";
import { useState } from "react";
import { useHistory } from "react-router";
import { Api } from "../../services/Api";

export const FormComment = ({newComment}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const history = useHistory();
  const {pathname} = history.location

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      comment: {
        name: name,
        content: content,
        email_user: email,
      },
    };
    console.log(pathname)

     Api.post(`${pathname}/comments`, data).then((response) => {
      console.log(response.data)
      newComment(response.data)
    });
  };

  return (
    <form className={styles.formComment} onSubmit={handleSubmit}>
      <div className={styles.postformcontent}>
        <div className={styles.container}>
          <input className={styles.name} type="text" placeholder="NAME" value={name}  onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <input className={styles.email} type="text" placeholder="E-MAIL" value={email}  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <textarea
            className={styles.message}
            type="email"
            placeholder="MESSAGE"
            value={content}  
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className={styles.submit} type="submit">
            Agregar Comentarios
          </button>
        </div>
      </div>
    </form>
  );
};
