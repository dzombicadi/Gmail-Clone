import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

export const FlashContext = React.createContext();

function EmailList() {
  const [emails, setEmails] = useState([]);

  // this will run this piece of code once when EmailList gets loaded
  useEffect(() => {
    // snapshot = reloads entire email list every time something changes (e.g. you get new mail...)
    // orderBy = will order it by timestamp descending
    // snapshot.docs.map = go through(map it) all mails in firebase database and take id and data(to, subject, message)

    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          // this will store id and data in emails(useState) const above
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {/* for every single mail you get from line 27 function, take every single one and show it with code below */}
        {/* take ID & from emails(setEmails) array, take `to, subject, message, timestamp` */}
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id} // when we push another element(new mail) it doesn't need to render entire list, than it will just add +1
            title={to}
            subject={subject}
            description={message}
            // when firebase passes the timestamp it comes in undefined format which can break entire code... this code will transfer it into 'working' one
            // question mark is used if something breaks up, if time is undefined it won't render it and will just skip this line of code
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hello what's up!!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="Amazon"
          subject="Package Arrived"
          description="Your package arrived and you can take it infront of your door"
          time="11pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
