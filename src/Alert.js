import React from "react";
import { useNavigate } from "react-router";

function Alert() {
  const navigate = useNavigate();
  return (
    <>
      <div className="alert">
        <div className="box1">
          <div className="alertTopic">Alert</div>
          <div className="description">J Naam Haley Nii Hunxa K....</div>
          <button onClick={() => navigate("/")}>Click To Continue....</button>
        </div>
      </div>
    </>
  );
}

export default Alert;
