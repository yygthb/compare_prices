import React from 'react'

import styles from './ProdAddButton.module.scss'

export default function ProdAddButton(props) {
  const addProd = props.addProd

  return (
    <div>
      <button
        className={styles.button_addprod}
        title="add new product"
        onClick={() => addProd()}
      >+</button>
    </div>
  )
}