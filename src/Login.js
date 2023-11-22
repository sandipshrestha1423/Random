import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName =
      event.target.elements.inlineFormInputGroupUsername.value;
    setName(enteredName);
    event.target.elements.inlineFormInputGroupUsername.value = "";
  };
  return (
    <>
      <div className="box">
        <form
          onSubmit={handleSubmit}
          class="row row-cols-lg-auto g-3 align-items-center"
        >
          <div class="col-10">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Name
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Name"
              />
            </div>
          </div>

          <div class="col-2">
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </form>
        <br />
      </div>
    </>
  );
}

export default Login;
