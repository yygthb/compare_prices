import React from 'react'
import style from './Header.module.scss'

export default function Header(props) {
  return (
    <header className={style.header}>
      <h1>
        Сравни цену
        
        <button
          className={style.button__info}
          title="справка"
          onClick={() => props.showInfo()}
        >i</button>
      </h1>
    </header>
  )
}