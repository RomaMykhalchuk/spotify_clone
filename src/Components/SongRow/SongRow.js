import React from "react";
import "./SongRow.css";

export const SongRow = ({ track, playSong }) => {
  return (
    <div className="songRow">
      <img
        src={track.album.images[0].url}
        className="songRow__album"
        alt={track.album.name}
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};
