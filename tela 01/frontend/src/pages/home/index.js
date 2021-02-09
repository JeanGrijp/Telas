import React from 'react';
import './home.css'

import homeBlack from "../../imagens/homeBlack.svg";
import searchBlack from "../../imagens/searchBlack.svg";
import localBlack from "../../imagens/black-placeholder-variant.svg";
import settingsBlack from "../../imagens/settingsBlack.svg";
import userBlack from "../../imagens/userBlack.svg";


export default function Home() {
  return (
    <div>
      <a href=""><img src={homeBlack} alt="" srcSet=""/></a>
      <a href=""><img src={searchBlack} alt="" srcSet=""/></a>
      <a href=""><img src={localBlack} alt="" srcSet=""/></a>
      <a href=""><img src={settingsBlack} alt="" srcSet=""/></a>
      <a href=""><img src={userBlack} alt="" srcSet=""/></a>
    </div>

  )
};