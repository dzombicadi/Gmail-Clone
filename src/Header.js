import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  /* useSelector - Allows you to extract data from the Redux store state, using a selector function. */
  /* it will take sendMessageIsOpen value(true/false) from mailSlice.js(redux) so we can use it here too */
  const user = useSelector(selectUser);

  // signOut is firebase's function
  // after signing out, use reduxs dispatch to set value of user to null in userSlice.js
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* this makes button clickable and with nice effect */}
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail"
        />
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        {/* if there's user photo, it will show it(source it) */}
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
