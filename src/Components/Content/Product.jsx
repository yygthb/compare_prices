/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import style from './Product.module.scss'

export default function Product(props) {
  const product = props.product
  const colored = product.isLowest === true
  const removeProd = props.removeProd

  return (
    <div key={product.id} className={style.product} >

      <div
        className={style.button__removeprod}
        onClick={() => removeProd(product.id, props.index)}
      >
        <span role="img">❌</span>
      </div>

      <div className={style.row}>
        <span htmlFor={"weight" + props.index}>вес</span>
        <input
          id={"weight" + props.index}
          type="number"
          placeholder="800 (гр)"
          value={product.weight}
          onChange={event => props.onHandleWeightChange(product.id, event.target.value)}
        />
      </div>

      <div className={style.row}>
        <span htmlFor={"price" + props.index}>цена</span>
        <input
          id={"price" + props.index}
          type="number"
          placeholder="125 (р)"
          value={product.price}
          onChange={event => props.onHandlePriceChange(product.id, event.target.value)}
        // value={priceValue}
        // onChange={event => setPriceValue(event.target.value)}
        />
      </div>

      <div className={style.row}>
        {/* <span className={style.label__info}>
          цена за 100гр
        </span> */}
        <div className={`${style.result} ${colored ? style.lowest : ''}`}>
          {product.result}
        </div>
      </div>

    </div>
  )
}