import React from "react";
import {
  FaCalendar,
  FaCircleCheck,
  FaDoorOpen,
  FaHashtag,
  FaStar,
  FaUser,
  FaEnvelope,
  FaTag
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import profileImage from "../assets/images/profile.png";
import logoImage from "../assets/images/Tasko.png";

const logoutHandler = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

const Sidebar = ({ profile }) => {
  return (
    <div className="sidebar">
      <div className="logospace">
      <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="profile-section">
        <div className="profile-picture">
          <img src={profileImage} alt="" className="w-30 h-30" />
        </div>
        <div className="user-info">
          <div className="user-fname">
            <FaUser className="icon" />
            <span className="text">{profile && profile.fullname}</span>
          </div>
          <div className="user-uname">
            <FaUser className="icon" />
            <span className="text">{profile && profile.username}</span>
          </div>
          <div className="user-email">
            <FaEnvelope className="icon" />
            <span className="text">{profile && profile.email}</span>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="nav-items">
        {NavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            onClick={item.onclick}
            className="nav-item"
          >
            {item.icon}
            <div className={"nav-item-name"}>{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const NavItems = [
  {
    id: 1,
    name: "Today",
    url: "/dashboard",
    icon: <FaStar />,
  },
  {
    id: 2,
    name: "Upcoming",
    url: "/upcoming",
    icon: <FaCalendar />,
  },
  {
    id: 3,
    name: "Important",
    url: "/important",
    icon: <FaHashtag />,
  },
  {
    id: 4,
    name: "Completed",
    url: "/completed",
    icon: <FaCircleCheck />,
  },
  {
    id: 5,
    name: "Logout",
    url: "/login",
    icon: <FaDoorOpen />,
    onclick: logoutHandler,
  },
];

export default Sidebar;
