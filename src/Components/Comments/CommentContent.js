import React, { useState, useRef, useEffect } from "react";
import { deleteComments, getComments, updateComment } from "../../services/api";
import { commentsDate } from "./function";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../helper/toast";

const CommentContent = (props) => {
  const {
    fname,
    lname,
    date,
    time,
    user,
    userId,
    commentUserId,
    commentContent,
    commentId,
    token,
    productId,
    setComments,
    comment,
  } = props;
  const [updateContent, setUpdateContent] = useState("");
  const [updateAble, setUpdateAble] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const cancelUpdateref = useRef(null);

  const deleteHandler = async () => {
    await deleteComments(commentId, token);
    setComments(await getComments(productId, token));
    notify("comment deleted!", "error");
  };

  const updateHandler = async () => {
    setUpdateAble(true);
  };

  useEffect(() => {
    if (comment.updatedAt !== comment.createdAt) {
      setIsUpdate(true);
    }
  });

  const changeContentHandler = (e) => {
    setUpdateContent(e.target.innerText);
  };

  const submitUpdateHandler = async () => {
    await updateComment(commentId, updateContent, token);
    setComments(await getComments(productId, token));
    setUpdateAble(false);
    setIsUpdate(true);
    notify("comment updated!", "warn");
  };
  const cancelUpdateHandler = async () => {
    cancelUpdateref.current.innerText = commentContent;
    setComments(await getComments(productId, token));
    setUpdateAble(false);
  };

  return (
    <div className="p-2 mx-5 border border-rounded my-2">
      <div className="d-flex justify-content-between text-muted mb-3">
        <div>
          <span className="mr-2">
            {fname} {lname}
          </span>

          <span className="mr-2">
            {isUpdate && "-- Comment updated at: "}
            {isUpdate ? commentsDate(comment.updatedAt).date : date}
          </span>
          <span>{isUpdate ? commentsDate(comment.updatedAt).time : time}</span>
        </div>
        {user && userId === commentUserId && (
          <div>
            <i
              name={commentId}
              onClick={updateHandler}
              style={{ cursor: "pointer" }}
              className="fa fa-pencil-alt text-info"
              title="Edit"
            ></i>
            <i
              onClick={deleteHandler}
              style={{ cursor: "pointer" }}
              className="fas fa-trash-alt	ml-3 text-danger"
              title="delete"
            ></i>
          </div>
        )}
      </div>
      <p
        id={commentId}
        contentEditable={updateAble}
        suppressContentEditableWarning={updateAble}
        onInput={changeContentHandler}
        value={updateContent}
        ref={cancelUpdateref}
      >
        {commentContent}
      </p>
      {updateAble && (
        <>
          <button
            className="btn btn-success mr-3"
            onClick={submitUpdateHandler}
          >
            submit
          </button>
          <button className="btn btn-danger" onClick={cancelUpdateHandler}>
            Cancel
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
export default CommentContent;
