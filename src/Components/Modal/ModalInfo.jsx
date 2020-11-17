import React from 'react'
import style from './ModalInfo.module.scss'
import img from '../../img/image_info2.jpg'

export default function ModalInfo(props) {

  function close(event) {
    event.stopPropagation()
    if (event.target.getAttribute('data-close') === "close") {
      props.closeModal()
    }
  }

  return (
    <div className={style.overlay}
      style={{ visibility: props.modalVisibility }}
      data-close="close"
      onClick={(event) => close(event)}
    >
      <div className={style.modal}>
        <div className={style.modal__content}>
          <p>
            Введите вес и цену товара
          </p>
          <p>
            Приложение подсветит наиболее <span>выгодную</span> позицию
          </p>
          <img src={img} alt="" />
        </div>
        <div className={style.modal__author}>
          <p>учебный проект на React</p>
          <p>yy.ainu@gmail.com</p>
        </div>
        <div className={style.modal__footer} >
          <button data-close="close" onClick={(event) => close(event)} >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}