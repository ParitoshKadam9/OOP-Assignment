import React from 'react'
import styles from '../../styles/Cart/cart2.module.css'
function Cart( items ) {
  console.log(items.item)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.name}>{items.item.item_name}</div>
        <div className={styles.name}>$ {items.item.price}</div>
        <div className={styles.name}>
          <div className={styles.edit}>-</div>
          <div className={styles.edit2}>{items.quantity_in_cart}</div>
          <div className={styles.edit}>+</div>
        </div>
      </div>
    </>
  );
}

export default Cart