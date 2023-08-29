// CSS
import styles from "./Home.module.css";

// Hooks
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Components


const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search__form}>
          <input 
            type="text" 
            placeholder="Ou busque por tags..." 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button className="btn btn__dark">Pesquisar</button>
        </form>
        <div>
          <h1>Post..</h1>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn">
                Criar primeiro post
              </Link>
            </div>
          )}
        </div>
    </div>
  );
};

export default Home;