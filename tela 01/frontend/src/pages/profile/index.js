import React from 'react';
import './style.css'

import homeBlack from "../../imagens/homeBlack.svg";
import homeWhite from "../../imagens/homeWhite.svg";
import searchBlack from "../../imagens/searchBlack.svg";
import localBlack from "../../imagens/black-placeholder-variant.svg";
import settingsBlack from "../../imagens/settingsBlack.svg";
import userBlack from "../../imagens/userBlack.svg";


export default function Home() {
  return (
    <div className='container'>
      <a className="middle1"></a>
      <a href="/home" className="icon1">
        <img src={homeWhite} alt="" srcSet=""/>
        </a>
      <a className="middle2"></a>
      <a href="/search" className="icon2">
        <img src={searchBlack} alt="" srcSet=""/></a>
      <a className="middle3"></a>
      <a href="/local" className="icon3">
        <img src={localBlack} alt="" srcSet=""/></a>
      <a className="middle4"></a>
      <a href="/settingss" className="icon4">
        <img src={settingsBlack} alt="" srcSet=""/></a>
      <a className="middle5"></a>
      <a href="/user" className="icon5">
        <img src={userBlack} alt="" srcSet=""/></a>
      <a className="middle6"></a>
    </div>

  )
};