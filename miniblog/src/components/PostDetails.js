
import styles from "./PostDetails.module.css";

import { Link } from "react-router-dom";

const PostDetails = ({post}) => {
  return (
    <div className={styles.post__detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn__outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetails;
