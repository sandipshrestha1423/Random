import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import UserContext from "./context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (submitted) {
      navigate("/content");
    }
  }, [submitted, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = name.trim();
    setUser({ name });

    if (enteredName === "") {
      navigate("/alert");
    } else {
      setName(enteredName);
      setSubmitted(true);
    }
  };
  return (
    <>
      <div className="box">
        <form
          onSubmit={handleSubmit}
          className="row row-cols-lg-auto g-3 align-items-center"
        >
          <div className="col-10">
            <label
              className="visually-hidden"
              htmlFor="inlineFormInputGroupUsername"
            >
              Name
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-2">
            <button type="submit" className="btn btn-success">
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
