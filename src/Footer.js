import React from "react";
import "./Footer.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Grid from '@material-ui/core/Grid';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h1>Album and song details</h1>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleFilledWhiteIcon fontSize="large" className="footer__icon"  />
        <SkipNextIcon className="footer__icon" />

        <RepeatIcon className="footer__green"/>
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      </div>
    </div>
  );
};
