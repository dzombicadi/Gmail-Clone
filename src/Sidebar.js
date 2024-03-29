import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  /* This hook returns a reference to the dispatch function from the Redux store. You can use this to make dispatch actions in the redux. Used similar in SendMai.js */
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      {/* adding plus icon before text */}
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        /* this will trigger openSendMessage const which will set "sendMessageIsOpen" to true in mailSlice.js */
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />

      <SidebarOption Icon={StarIcon} title="Starred" number={3} />
      <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" number={1} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={12} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number="" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
