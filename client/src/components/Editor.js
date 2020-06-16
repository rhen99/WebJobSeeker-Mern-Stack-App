import React from "react";

function Editor() {
  return (
    <div className="container push-footer mt-5">
      <h3 className="mb-3">Create a Job</h3>
      <form>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
      </form>
    </div>
  );
}

export default Editor;
