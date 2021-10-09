import styles from './NewPost.module.css'
import { useState } from "react";
import { useHistory } from 'react-router';
import { Api } from '../../services/Api';

export const NewPost = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            post: {
                name: name,
                content: content,
                email_user: email
            }
        }
        
        Api.post("/posts", data).then((response) => {
            history.push(`/posts/${response.data.id}`) 
          });
      };

    return (
        <>
            <form className={styles.addpost} onSubmit={handleSubmit}>
                <ul className={styles.postContainerForm}>
                    <li className={styles.namePost}>
                        <input className={styles.postNameForm} type="text" placeholder="NAME" value={name}  onChange={(e) => setName(e.target.value)}/>
                    </li>
                    <li className={styles.emailPost}>
                        <input className={styles.postEmailForm} type="email" placeholder="E-MAIL" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    </li>
                    <li className={styles.MenssgePost}>
                        <textarea className={styles.postMessageForm} type="text" placeholder="MESSAGE" value={content}  onChange={(e) => setContent(e.target.value)}></textarea>
                    </li>
                    <button className={styles.postButtomForm} type="submit">publicar post</button>

                </ul>
            </form>
            
        </>
    )
}