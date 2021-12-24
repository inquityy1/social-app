import React from "react";

export default function CreatePost() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="post-feed">
      <div className="post">
        <div className="post-helper">
          <h5>Say Something...</h5>
        </div>
        <div className="post-form">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Create a post"
              name="description"
              rows="3"
              cols="50"
            />
            <div className="submit">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="posted-post">
        <div className="user-avatar">
          <i class="fas fa-user-circle"></i>
          <p>Nebojsa</p>
        </div>
        <div className="comment-buttons">
          <h5>asdghjshadhasg</h5>
          <div>
            <button className="btn btn-light">
              <i class="far fa-thumbs-up">0</i>
            </button>
            <button className="btn btn-light">
              <i class="far fa-thumbs-down"></i>
            </button>
            <button className="btn btn-primary">Comments</button>
            <button className="btn btn-danger">X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
