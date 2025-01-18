import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={postStyle}>
      <h3>Title: {title}</h3>
      <p>Post id: {id}</p>
      <Link to={`/post/${id}`}>See details</Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
