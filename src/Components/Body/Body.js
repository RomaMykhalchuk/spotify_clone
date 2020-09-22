import React from "react";
import "./Body.css";
import { Header } from "../Header/Header";
import { SongRow } from "../SongRow/SongRow";
import { useDataLayerValue } from "../../DataLayer";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  // const playPlaylist = (id) => {
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:e250c14aef2e40e5b027154f126f9920`,
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  const playSong = (id) => {
    fetch('curl -X GET "https://api.spotify.com/v1/me/player/currently-playing" -H "Authorization: Bearer {BQCzPsH3Kqee4Tf05o4iuU-9TxQ-LbNitO-jj29tLdIIjAZ4b2D-ONwfXnkzixafpPAlSfOPNaspdcVj6QUxpH3F8JbwmyxZkXN0QhqRr3vEkNVeZoabz3u4eJRdufOpg3FTo-lg4TsDxMccvmnGIT7gxVnuwZAD0spVUJbEUyUcGXqt8dtl}"')
    .then(response => response.json())
    .then(data =>console.log(data));
    // spotify
    //   .play({
    //     uris: [`spotify:track:${id}`],
    //   })
    //   .then((res) => {
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
    //       dispatch({
    //         type: "SET_ITEM",
    //         item: r.item,
    //       });
    //       dispatch({
    //         type: "SET_PLAYING",
    //         playing: true,
    //       });
    //     });
    //   });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong onClick={playSong}>PLAYLIST</strong>
          <h2>Discover weekly</h2>
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
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
};
