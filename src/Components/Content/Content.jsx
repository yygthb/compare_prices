import React from 'react'
import Product from './Product'
import ProdAddButton from './ProdAddButton'

export default function Content(props) {
  const products = props.products

  return (
    <main>

      <ProdAddButton addProd={props.addProd} />
      
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

    </main>
  )
}