import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  /* This hook returns a reference to the dispatch function from the Redux store. You can use this to make dispatch actions in the redux. Used similar in Sidebar.js */
  const dispatch = useDispatch();

  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          /* this will trigger openSendMessage const which will set "sendMessageIsOpen" to false in mailSlice.js */
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To:"
          type="text"
          {...register("to", { required: true })} // makes input required(otherwise won't send data)
        />

        {/* Handling errors */}
        {errors.to && <p className="sendMail__error">To is required!</p>}

        <input
          name="subject"
          placeholder="Subject:"
          tyspe="text"
          {...register("subject", { required: true })}
        />

        {/* Handling errors */}
        {/* if there's error in subject input field, do this (&&) */}
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}

        <input
          name="message" // cool stuff, adds auto-add old messages
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />

        {/* Handling errors */}
        {errors.message && (
          <p className="sendMail__error">Message is required!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
