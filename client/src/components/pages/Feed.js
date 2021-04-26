import React from "react";
import "./Feed.css";
import NavBar from "../NavBar";
import LeftBar from "../LeftBar";
import ContentCard from "../ContentCard";
import * as API from "../api/index";
function Feed() {
  const trytofetch = API.fetchUpcomingAppointment();
  return (
    <>
      <NavBar />
      <div className="feed-container">
        <LeftBar />
        <div className="feed-content-container">
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    </>
  );
}

export default Feed;
