import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <section className="p-3 d-flex ff-itim text-center border-bottom border-1">
        <p className="w-25"> {id}</p>
        <h3 className="w-25">{title}</h3>
        <p className="w-25">{content}</p>
        <button className="btn btn-primary me-4" onClick={() => editPost(id)}>
          <FontAwesomeIcon className="me-2" icon={faPenToSquare} /> Edit
        </button>
        <button onClick={() => deletePost(id)} className="btn btn-danger">
          <FontAwesomeIcon className="me-2" icon={faTrash} />
          Delete
        </button>
      </section>
    </>
  );
};
export default Post;
