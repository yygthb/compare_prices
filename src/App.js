import React, { useEffect } from 'react';

import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

// import './App.css';
import style from './App.module.scss'

function App() {
  const [products, setProd] = React.useState([
    // { id: 1, price: 125, weight: 750, result: 16.66, isLowest: undefined },
    // { id: 2, price: 130, weight: 800, result: 16.25, isLowest: undefined },
    // { id: 3, price: 150, weight: 880, result: 17.04, isLowest: undefined },
  ])
  const [lowestId, setLowestId] = React.useState('')

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

  function sortByResult(arr) {
    arr.sort((a, b) => +a.result > +b.result ? 1 : -1)
    return arr[0].id
  }

  function showLowest() {
    const sup = []
    products.map(product => {
      product.isLowest = false
      sup.push({ id: product.id, result: product.result })
    })
    const lowestId = sortByResult(sup)
    // console.log('products: ', products)
    // console.log('sup: ', sup)

    setProd(
      products.map(product => {
        if (product.id === lowestId) {
          product.isLowest = true
        }
        return product
      })
    )
  }

  function onHandlePriceChange(id, value) {
    setProd(
      products.map(product => {
        if (product.id === id) {
          product.price = value
          product.result = +calculate(product.price, product.weight)
        }
        showLowest()
        return product
      })
    )
  }

  function onHandleWeightChange(id, value) {
    setProd(
      products.map(product => {
        if (product.id === id) {
          product.weight = value
          product.result = +calculate(product.price, product.weight)
        }
        showLowest()
        return product
      })
    )
  }

  function test() {
    console.log('ACCEPTED')
  }

  function removeProd(id) {
    setProd(
      // products.filter(p => p.id !== id)
      products.filter(p => {
        if (p.id !== id) {
          return p
        }
      })
    )
  }

  function removeAll() {
    setProd(
      products.filter(product => false)
    )
  }

  function showInfo() {
    console.log('info')
  }

  useEffect(() => {
    console.log('use effect')
  })

  return (
    <div className={style.wrapper}>
      <Header showInfo={showInfo} />
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
