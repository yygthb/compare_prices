import React from 'react'

import style from './Header.module.scss'

export default function Header(props) {
  return (
    <div className={style.header}>
      <h1>
        Сравнение цен
        {/* XXXXXXXXXXXX */}
      </h1>
      <button
        className={style.button__info}
        title="справка"
        onClick={() => props.showInfo()}
      >i</button>
    </div>
  )
}