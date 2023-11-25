import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
function Login() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Name Updated:", name);
    if (submitted) {
      navigate("/content");
    }
  }, [name, submitted]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = event.target.elements.inlineFormInputGroupUsername.value.trim();
    if (enteredName === "") {
      navigate("/alert");
    } else {
      setName(enteredName);
      // setName(String(enteredName));
      setSubmitted(true);
    }
    event.target.elements.inlineFormInputGroupUsername.value = "";
  };
  return (
    <>
      <div className="box ">
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
        {submitted && <Header name={name} />}
      </div>
    </>
  );
}

export default Login;
