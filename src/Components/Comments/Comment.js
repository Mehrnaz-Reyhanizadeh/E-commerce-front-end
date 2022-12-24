import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../helper/toast";
import { postComments, getComments } from "../../services/api";
import { validate } from "./validate";
import { commentsDate } from "./function";
import { ContextUser } from "../../context/ContextUserProvider";
import CommentContent from "./CommentContent";

function Comment(props) {
  const { user, userData } = useContext(ContextUser);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState("");
  const [touched, setTouched] = useState(false);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    setErrors(validate(content));
  }, [content, touched]);

  useEffect(() => {
    (async () => {
      setComments(await getComments(props.id, token));
    })();
  }, []);

  const focusHanlder = (event) => {
    setTouched(true);
  };

  const changeHandler = (event) => {
    setContent(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!errors) {
      try {
        await postComments(props.id, content, token);

        notify("Your comment posted successfully", "success");
        setContent("");
        setComments(await getComments(props.id, token));
      } catch (error) {
        notify("Invalid data!", "error");
      }
    } else {
      notify("Invalid data!", "error");
      setTouched(true);
    }
  };

  return (
    <div className="mx-auto" style={{ width: "85%", maxWidth: "1500px" }}>
      <form onSubmit={submitHandler}>
        <div className="form-group mx-3">
          <label htmlFor="content">take your comment:</label>
          <textarea
            onFocus={focusHanlder}
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary ml-3">
          Submit Comment
        </button>
      </form>
      {comments.length > 0 && (
        <div
          className="overflow-auto border p-2 mx-5 my-4"
          style={{ height: "400px" }}
        >
          {comments.reverse().map((comment) => {
            return (
              <CommentContent
                productId={props.id}
                key={comment._id}
                commentId={comment._id}
                fname={comment.user.fname}
                lname={comment.user.lname}
                date={commentsDate(comment.createdAt).date}
                time={commentsDate(comment.createdAt).time}
                user={user}
                userId={userData._id}
                commentUserId={comment.user._id}
                commentContent={comment.content}
                token={token}
                setComments={setComments}
                comment={comment}
              />
            );
          })}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Comment;
