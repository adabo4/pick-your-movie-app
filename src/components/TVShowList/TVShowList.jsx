import React from 'react'
import s from "./style.module.css"
import TVShowListItem from '../TVShowListItem/TVShowListItem'
import TVShowDetail from '../TVShowDetail/TVShowDetail'

export function TVShowList({tvShowList, onClickItem}) {
  return (
    <>
    <div className={s.title}>
        You'll probably like:
    </div>
    <div className={s.list}>
        {
            
            tvShowList.map((item) => {
                return (
                    <span className={s.tv_show_item} key={item.id}>
                <TVShowListItem tvShow={item} onClick={onClickItem} />
                </span >
                )})
        }
         </div>
    </>
  )
}
