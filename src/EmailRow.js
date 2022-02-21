import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import { useNavigate } from "react-router-dom";

function EmailRow({ title, subject, description, time, id }) {
  const navigate = useNavigate(); // when clicking messages, it navigates to the /mail directory

  return (
    <div onClick={() => navigate("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <div className="emailRow__title">{title}</div>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <div className="emailRow__time">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
