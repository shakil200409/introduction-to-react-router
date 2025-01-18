import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const postStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "10px",
  };
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h3>Title: {title}</h3>
      <p>Post id: {id}</p>
      <Link to={`/post/${id}`}>See details</Link>
      <button onClick={handleSeeMore}>See more</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
