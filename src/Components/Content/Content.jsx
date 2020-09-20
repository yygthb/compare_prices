import React from 'react'

import Product from './Product'

import style from './Content.module.scss'
import ProdAddButton from './ProdAddButton'

export default function Content(props) {
  const products = props.products

  return (
    <main className={style.content}>

      {
        products.map((p, index) => {
          return <Product
            key={p.id}
            product={p}
            index={index}
            coloredId={props.coloredId}
            removeProd={props.removeProd}
            onHandlePriceChange={props.onHandlePriceChange}
            onHandleWeightChange={props.onHandleWeightChange}
          />
        })
      }

      <ProdAddButton addProd={props.addProd} />
    </main>
  )
}