import React, { useEffect } from 'react';

import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import ModalInfo from './Components/Modal/ModalInfo'

// import './App.css';
import style from './App.module.scss'

function App() {
  const [products, setProd] = React.useState([
    { id: 0, price: '', weight: '', result: '' },
    // { id: 1, price: 111, weight: 800, result: 13.87 },
    // { id: 2, price: 130, weight: 800, result: 16.25 },
  ])
  const [coloredId, setColorId] = React.useState('')
  const [modalVisibility, setModalVisibility] = React.useState('hidden')

  function addProd() {
    setProd(
      [{
        id: Date.now(),
        price: "",
        weight: "",
        result: "",
      }, ...products]
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
    products.forEach(product => {
      sup.push({ id: product.id, result: product.result })
    })
    sortByResult(sup)
    return sup[0].id
  }

  function onHandlePriceChange(id, value) {
    if (value >= 0) {
      setProd(
        products.map(product => {
          if (product.id === id) {
            product.price = value
            product.result = +calculate(product.price, product.weight)
          }
          setColorId(
            showLowest()
          )
          return product
        })
      )
    }
  }

  function onHandleWeightChange(id, value) {
    if (value >= 0) {
      setProd(
        products.map(product => {
          if (product.id === id) {
            product.weight = value
            product.result = +calculate(product.price, product.weight)
          }
          setColorId(
            showLowest()
          )
          return product
        })
      )
    }
  }

  function removeProd(id) {
    setProd(
      products.filter(p => p.id !== id)
      // products.filter(p => {
      //   if (p.id !== id) {
      //     return p
      //   }
      // })
    )
  }

  useEffect(() => {
    // console.log('use effect /colored id: ', coloredId)
  })

  function removeAll() {
    setProd(
      [{
        id: Date.now(),
        price: "",
        weight: "",
        result: "",
      }]
    )
  }

  function showModal() {
    // console.log('--------------------')
    // console.log('      info products: ', products)
    // console.log('      info coloredId: ', coloredId)
    // console.log('--------------------')

    setModalVisibility('visible')
  }

  function closeModal() {
    setModalVisibility('hidden')
  }

  return (
    <div className={style.wrapper} data-theme="kotaku">
    {/* <div className={style.wrapper} data-theme="light">  */}
      <Header showInfo={showModal} />
      <Content
        products={products}
        coloredId={coloredId}
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
