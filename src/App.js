import React from 'react'

import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import ModalInfo from './Components/Modal/ModalInfo'

// import './App.css';
import style from './App.module.scss'

function App() {

  const theme = localStorage.getItem('theme')
  if (theme) {
    document.body.dataset.theme = theme
  }

  const [products, setProd] = React.useState([
    // { id: 1, price: 125, weight: 800, result: 15.62, isLowest: false },
    // { id: 5, price: 100, weight: 700, result: 14.28, isLowest: true },
    // { id: 7, price: 150, weight: 900, result: 16.66, isLowest: false },
    { id: 1, price: '', weight: '', result: '', isLowest: false },
  ])
  const [modalVisibility, setModalVisibility] = React.useState('hidden')

  function addProd() {
    setProd(
      [{
        id: Date.now(),
        price: "",
        weight: "",
        result: "",
        isLowest: false,
      }, ...products]
    )
  }

  function calculate(price, weight) {
    const quotient = price / (weight || 1)
    const result = (Math.floor(quotient * 10000) / 10000) * 100
    return result.toFixed(2)
  }

  function showLowest(arr = products) {
    const sup = [...arr]
    sup.sort((a, b) => +a.result > +b.result ? 1 : -1)
    arr.forEach(p => {
      p.id === sup[0].id ? p.isLowest = true : p.isLowest = false
    })
  }

  function onHandleChange(id, value, field) {
    if (value >= 0) {
      setProd(
        products.map(product => {
          if (product.id === id) {
            product[field] = value
            product.result = +calculate(product.price, product.weight)
            showLowest()
          }
          return product
        })
      )
    }
  }

  function onHandlePriceChange(id, value) {
    onHandleChange(id, value, 'price')
  }

  function onHandleWeightChange(id, value) {
    onHandleChange(id, value, 'weight')
  }

  function removeAll() {
    setProd(
      [{
        id: Date.now(),
        price: "",
        weight: "",
        result: "",
        isLowest: false,
      }]
    )
  }

  function removeProd(id, index) {
    const prods = [...products]
    if (prods.length !== 1) {
      prods.splice(index, 1)
      showLowest(prods)
      setProd(prods)
    } else {
      removeAll()
    }
  }

  function showModal() {
    setModalVisibility('visible')
  }

  function closeModal() {
    setModalVisibility('hidden')
  }

  return (
    <div className={style.wrapper}>
      <Header showInfo={showModal} />
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
      <ModalInfo
        modalVisibility={modalVisibility}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
