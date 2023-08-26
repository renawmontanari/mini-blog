
import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validar image URL

    // Criar o array de tags

    // Checar todos os valores

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    });

    // Redirecionar para a página Home

  };

  return (
    <div className={styles.create__post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título</span>
            <input
              type="text"
              name="title"
              required
              placeholder="Pense no título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que represente o seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
            ></textarea>
            <label>
            <span>Tags:</span>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
            />
          </label>
          </label>
          {!response.loading && <button className="btn">Criar post</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {response.error && <p className="error">{response.error}</p>}
        </form>
    </div>
  );
};

export default CreatePost;