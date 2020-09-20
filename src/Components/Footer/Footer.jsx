import React from 'react'

import style from './Footer.module.scss'

export default function Footer(props) {
  return (
    <footer className={style.footer}>
      <button
        className={style.button__reset}
        title="сбросить все"
        onClick={() => props.removeAll()}
      >Сбросить</button>
    </footer>
  )
}