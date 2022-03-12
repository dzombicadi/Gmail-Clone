import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  /* useSelector - Allows you to extract data from the Redux store state, using a selector function. */
  /* it will take sendMessageIsOpen value(true/false) from mailSlice.js(redux) so we can use it here too */
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
      {/* React Router is library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL */}
      {/* Header, Sidebar sections will render by default because they're not in the Routes tags... But if we go to /mail path, Mail will render, and if we go to / path, EmailList will render*/}
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />}></Route>
            <Route path="/" element={<EmailList />}></Route>
          </Routes>
        </div>

        {/* if the value is true(it gets data from redux), it will show the SendMail box (by the default it's false)*/}
        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
}

export default App;
