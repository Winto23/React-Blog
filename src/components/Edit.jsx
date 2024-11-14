const Edit = ({
  saveTitleToState,
  saveContentToState,
  title,
  content,
  updatePost,
  cancelEdit,
}) => {
  return (
    <>
      <form className="p-3 text-center my-3 ff-itim">
        <h1 className="text-primary mb-4">Edit Post</h1>
        <input
          onChange={saveTitleToState}
          type="text"
          placeholder="title"
          defaultValue={title}
          className="form-control w-25 mx-auto"
        />
        <br />
        <br />
        <textarea
          onChange={saveContentToState}
          placeholder="contents"
          defaultValue={content}
          className="form-control w-25 mx-auto"
        ></textarea>
        <br />
        <br />
        <button onClick={updatePost} className="btn me-4 btn-primary">
          <i className="fa-solid fa-pen me-2"></i>
          Update Post
        </button>
        <button onClick={cancelEdit} className="btn me-2 btn-danger">
          <i className="fa-solid fa-ban me-2"></i>
          Cancel Edit
        </button>
      </form>
    </>
  );
};
export default Edit;
