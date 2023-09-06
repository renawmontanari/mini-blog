
// CSS
import styles from "./Search.module.css";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

// Components
import PostDetails from "../../components/PostDetails";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search__container}>
        <h2>Search</h2>
        <div className={styles.noposts}>
          {posts && posts.length === 0 && (
            <div>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <Link to="/" className="btn btn__dark">
                Voltar
              </Link>
            </div>
          )}
          {posts && posts.map((post) => 
            <PostDetails key={post.id} post={post} />
          )}
        </div>
    </div>
  );
};

export default Search;