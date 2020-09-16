import React from 'react';

import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

// import './App.css';
import style from './App.module.scss'

function App() {
  const [products, setProd] = React.useState([
    { id: 1, price: 125, weight: 750, result: 16.66, isLowest: false },
    { id: 2, price: 130, weight: 800, result: 16.25, isLowest: true },
    { id: 3, price: 150, weight: 900, result: 16.66, isLowest: false },
  ])

  function addProd() {
    setProd(
      products.concat([
        {
          id: Date.now(),
          price: "",
          weight: "",
          result: "",
        }
      ])
    )
  }

  function calculate(price, weight) {
    const quotient = price / (weight || 1)
    const result = (Math.floor(quotient * 10000) / 10000) * 100
    return result.toFixed(2)
  }

  function removeProd(id) {
    setProd(
      products.filter(s => s.id !== id)
    )
  }

  function onHandlePriceChange(id, value) {
    setProd(
      products.map(product => {
        if (product.id === id) {
          product.price = value
          product.result = calculate(product.price, product.weight)
        }
        return product
      })
    )
  }

  function onHandleWeightChange(id, value) {
    setProd(
      products.map(product => {
        if (product.id === id) {
          product.weight = value
          product.result = calculate(product.price, product.weight)
        }
        return product
      })
    )
  }

  function removeAll() {
    setProd(
      products.filter(product => false)
    )
  }

  return (
    <div className={style.wrapper}>
      <Header />
      <Content
        products={products}
        addProd={addProd}
        removeProd={removeProd}
        onHandlePriceChange={onHandlePriceChange}
        onHandleWeightChange={onHandleWeightChange}
      />
      <Footer
        removeAll={removeAll}
      />
    </div>
  );
}

export default App;
