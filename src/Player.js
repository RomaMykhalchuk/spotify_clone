import React from "react";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import "./Player.css";

export const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};
