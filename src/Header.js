import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

export const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
console.log(user)
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for artist" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};
