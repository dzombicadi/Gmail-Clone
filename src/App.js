import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  /* useSelector - Allows you to extract data from the Redux store state, using a selector function. */
  /* it will take sendMessageIsOpen value(true/false) from mailSlice.js(redux) so we can use it here too */
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // this will keep you logged in, won't reset your login after refreshing page\
  // will check if there's login values
  useEffect(
    () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // IF the user is logged in
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
            })
          );
        } else {
        }
      });
    },
    [] /* -- this will only run once */
  );

  return (
    <BrowserRouter>
      {/* React Router is library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL */}
      {/* Header, Sidebar sections will render by default because they're not in the Routes tags... But if we go to /mail path, Mail will render, and if we go to / path, EmailList will render*/}

      {/* if there's not user value in redux(not logged in), this gonna render only Login page... In other case it's gonna render everything else */}
      {!user ? (
        <Login />
      ) : (
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
      )}
    </BrowserRouter>
  );
}

export default App;
