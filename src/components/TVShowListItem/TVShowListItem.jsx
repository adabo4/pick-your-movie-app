import React from 'react'
import s from "./style.module.css"
import {SMAL_IMG_COVER_BASE_URL } from "../../api/config"


export default function TVShowListItem({ tvShow, onClick }) {

    function onClick_(){
        onClick(tvShow);
    }
  return (
    <div onClick={onClick_} className={s.container}>
        <img 
        src={SMAL_IMG_COVER_BASE_URL+tvShow.backdrop_path} 
        alt={tvShow.name} 
        className={s.img}
        />

        <div className={s.title}>
            {tvShow.name.length > 20 ? tvShow.name.slice(0, 20) + "..." : tvShow.name}
        </div>

    </div>
  )
}
