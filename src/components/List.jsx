import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
    { id: 3, title: "t3", content: "c3" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  //   useEffect(() => {
  //     console.log("title", title);
  //   }, [title]);

  //   useEffect(() => {
  //     console.log("content", content);
  //   }, [content]);

  //   useEffect(() => {
  //     console.log("Posts", posts);
  //   }, [posts]);

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  function savePost(e) {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
  }
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  function editPost(id) {
    setEditId(id);
    toggleEdit();
  }

  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };

  const updatePost = (e) => {
    e.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };

  const cancelEdit = () => {
    setIsEdit(false); // Close edit mode
    setTitle(""); // Clear title
    setContent(""); // Clear content
  };

  const deletePost = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (isConfirmed) {
      const modifiedPosts = posts.filter((eachPost) => eachPost.id !== id);
      setPosts(modifiedPosts);
    }
  };

  if (isCreate) {
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id === editId;
    });
    return (
      <Edit
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        cancelEdit={cancelEdit}
      />
    );
  }
  return (
    <>
      <h2 className="ff-itim m-3 text-center titles">All Posts</h2>
      {posts.length > 0 && (
        <>
          <div className="d-flex ff-itim ">
            <h3 className="w-25 text-center">ID</h3>
            <h3 className="w-25 text-center">Title</h3>
            <h3 className="w-25 text-center">Content</h3>
            <h3 className="w-25 text-start">Action</h3>
          </div>
        </>
      )}

      {!posts.length ? (
        <div>
          <h3 className="ff-itim m-3">There is nothing to see here!</h3>
        </div>
      ) : (
        posts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}

      <br />
      <br />
      <button className="btn btn-primary ms-5" onClick={toggleCreate}>
        + Create New
      </button>
    </>
  );
};

export default List;
