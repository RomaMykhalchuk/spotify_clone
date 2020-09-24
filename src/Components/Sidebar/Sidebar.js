import React from "react";
import "./Sidebar.css";
import { useDataLayerValue } from "../../DataLayer";
import { SidebarOption } from "../SidebarOption/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setBasicPlaylist = () => {
    spotify.getPlaylist("37i9dQZF1DX0UrRvztWcAU").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
  };

  return (
    <div className="sidebar">
      <img
        onClick={setBasicPlaylist}
        className="sidebar__logo"
        alt="logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.id}
          id={playlist.id}
          spotify={spotify}
        />
      ))}
    </div>
  );
};
