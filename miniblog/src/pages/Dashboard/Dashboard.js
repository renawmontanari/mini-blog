
// CSS
import styles from "./Dashboard.module.css";

// Components
import { Link } from "react-router-dom";

// Hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const deleteDocument = (id) => {};

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>

        ) : (
          <>
            <div className={styles.post__header}>
              <span>Título</span>
              <span>Ações</span>
            </div>
            
            {posts && posts.map((post) =>
              <div key={post.id} className={styles.post__row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn__outline">
                    Ver
                  </Link>
                  <Link to={`/posts/edit/${post.id}`} className="btn btn__outline">
                    Editar
                  </Link>
                  <button onClick={() => deleteDocument(post.id)} className="btn btn__outline btn__danger">
                    Excluir
                  </button>
                </div>
              </div>
            )}
          </>
        )}

    </div>
  );
};

export default Dashboard;