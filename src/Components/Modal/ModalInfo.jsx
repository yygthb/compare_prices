import React from 'react'

import style from './ModalInfo.module.scss'

import img from '../../img/image_info2.jpg'

export default function ModalInfo (props) {
  
  function close (event) {
    event.stopPropagation()
    if (event.target.getAttribute('data-close') === "close") {
      props.closeModal()
    }
  }

  return (
    <div className={style.overlay} 
      style={{visibility: props.modalVisibility}}
      data-close="close"
      onClick={(event) => close(event)}
      >
      <div className={style.modal}>
        {/* <div className={style.modal__header}>
          <h4>сравни цену</h4>
        </div> */}
        <div className={style.modal__content}>
          <p>
            Введите цену и вес товара
          </p>
          <p>
            Приложение подсветит наиболее <span>выгодную</span> позицию
          </p>
          <img src={img} alt=""/>
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