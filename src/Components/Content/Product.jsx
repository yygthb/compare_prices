import React from 'react'

import style from './Product.module.scss'

export default function Product(props) {
  const product = props.product
  const colored = product.id === props.coloredId
  const removeProd = props.removeProd

  return (
    // <div key={product.id} className={`${style.product} ${product.isLowest ? style.lowest : ''}`} >
    <div key={product.id} className={style.product} >
      <div className={style.row}>
        <label htmlFor={"price" + props.index}>цена</label>
        <input
          id={"price" + props.index}
          type="text"
          placeholder="125 (р)"
          value={product.price}
          onChange={event => props.onHandlePriceChange(product.id, event.target.value)}

        // value={priceValue}
        // onChange={event => setPriceValue(event.target.value)}
        />
      </div>

      <div className={style.row}>
        <label htmlFor={"weight" + props.index}>вес</label>
        <input
          id={"weight" + props.index}
          type="text"
          placeholder="800 (гр)"
          value={product.weight}
          onChange={event => props.onHandleWeightChange(product.id, event.target.value)}
        />
      </div>

      <div className={style.row}>
        <div className={`${style.result} ${colored ? style.lowest : ''}`}>
          {/* RESULT {props.index} */}
          {product.result}
        </div>
      </div>

      <button
        className={style.button__removeprod}
        onClick={() => removeProd(product.id)}
      >+</button>

    </div>
  )
}