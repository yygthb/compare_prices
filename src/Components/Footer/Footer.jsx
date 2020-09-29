import React from 'react'

import style from './Footer.module.scss'

export default function Footer(props) {

  function setTheme(name) {
    document.body.dataset.theme = name
    localStorage.setItem('theme', name)
  }

  return (
    <footer className={style.footer}>
      <div className={style.themes}>

        <div className={style.theme__item}><span>themes:</span></div>
        <div className={style.theme__item + ' ' + style.kotaku}
          onClick={() => setTheme("kotaku")}
        ></div>
        <div className={style.theme__item + ' ' + style.coasters}
          onClick={() => setTheme("coasters")}
        ></div>
        <div className={style.theme__item + ' ' + style.sugari}
          onClick={() => setTheme("sugari")}
        ></div>
      </div>
      <button
        className={style.button__reset}
        title="сбросить все"
        onClick={() => props.removeAll()}
      >Сбросить</button>
    </footer>
  )
}