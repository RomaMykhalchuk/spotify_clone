import React from "react";
import { Body } from "../Body/Body";
import { Footer } from "../Footer/Footer";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Player.css";

export const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};
