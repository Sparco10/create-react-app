import React from "react";
import "./contact.css";

const online = true;
const avatar =
  "https://avatars.githubusercontent.com/u/76485100?s=400&u=a33d12f3e44be8b2e627738df7e7aaebf7a9b3dc&v=4";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="" />
      <div className="status">
        <h3 className="name">Julien</h3>
        <div className={online ? "status-online" : "status-offline"}></div>
        <p className="status-text">{online ? "Online" : "Offline"} </p>
      </div>
    </div>
  );
}

export default Contact;