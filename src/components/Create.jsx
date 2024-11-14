import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <>
      <form className="ff-itim text-center">
        <h1 className="m-3 text-primary">Create New Post</h1>
        <input
          type="text"
          ref={getTitle}
          className="p-1 w-25 rounded rounded-3"
          placeholder="title"
          onChange={saveTitleToState}
        />
        <br />
        <br />
        <textarea
          ref={getContent}
          placeholder="content"
          className="p-1 w-25 rounded rounded-3"
          onChange={saveContentToState}
        ></textarea>
        <br />
        <br />
        <button onClick={savePost} className="btn btn-primary me-4 ">
          + Create Post
        </button>
        <button className="btn btn-danger">
          <i className="fa-solid fa-ban me-2"></i>
          Cancel
        </button>
      </form>
    </>
  );
};
export default Create;
