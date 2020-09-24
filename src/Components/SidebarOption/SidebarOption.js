import React from "react";
import "./SidebarOption.css";

import { useDataLayerValue } from "../../DataLayer";


export const SidebarOption = ({ title, Icon, id, spotify }) => {

  const [{}, dispatch] = useDataLayerValue();


  const setCurrentPlaylist = (id) => {
    spotify.getPlaylist(id).then(r => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: r,
      });
    } )
  };
  return (
    <div className="siderbarOption" >
      {Icon && <Icon className="siderbarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p onClick={()=> setCurrentPlaylist(id)}>{title}</p>}
    </div>
  );
};
