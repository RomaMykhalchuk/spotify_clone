import React from "react";
import "./Body.css";
import { Header } from "../Header/Header";
import { SongRow } from "../SongRow/SongRow";
import { useDataLayerValue } from "../../DataLayer";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const Body = ({ spotify }) => {
  const [{ discover_weekly, token }, dispatch] = useDataLayerValue();

  //got rt
  const playSong = (id) => {
    fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((r) => console.log(r));
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong onClick={playSong}>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} playSong={playSong} />
        ))}
      </div>
    </div>
  );
};
