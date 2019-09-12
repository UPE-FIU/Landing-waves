/**
 * Landing page
 */
import React, { Component } from "react";
import { MLHBadge, ScrollMenu, Footer } from "../../components";
import "./styles.css";

import Schedule from "./schedule";
import Faqs from "./faqs";
import Tracks from "./tracks";
import Supporters from "./supporters";
import Organizers from "./organizers";
import Info from "./info";
import Main from "./main";

export default class Landing extends Component {
  //navigates to registration dashboard
  handleRegisterClick = () => {
    window.open("https://dashboard.shellhacks.net");//this will go to login if you're not already logged in
  };

  handleMentorClick = () => {
    window.open("https://dashboard.shellhacks.net/mentor");
  };
  render() {
    //landing page sections
    const menuOptions = [
      { title: "Home", location: "home" },
      { title: "About Us", location: "about" },
      { title: "Tracks", location: "tracks" },
      { title: "Schedule", location: "schedule" },
      { title: "Faqs", location: "faqs" },
      { title: "Sponsors", location: "sponsors" },
      { title: "Thanks", location: "organizers" }
    ];

    return (
      <ScrollMenu options={menuOptions}>
        <MLHBadge />
        <div className="scroll">
          <Main
            handleMentorClick={this.handleMentorClick}
            handleRegisterClick={this.handleRegisterClick}
          />
          <div className="landing-gradient">
            <Info />
            <Tracks />
            <Schedule />
            <Faqs />
            <Supporters />
            <Organizers />
            <Footer showSocials={false} />
          </div>
        </div>
      </ScrollMenu>
    );
  }
}
