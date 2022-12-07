import React from 'react'
import Cart from '../components/Cart/cart'
import styles from '../styles/Cart/cart.module.css'

function Carts() {
    const data = [
      {
        id: 52,
        item: {
          id: 1,
          item_name: "jb4l778",
          price: 0.999,
          offer: 0,
          qty_avlb: 7,
          delivery_time: 19,
          description: "some chocolate",
          img_name: "munch.jpg",
          category: {
            id: 1,
            category_name: "earphones",
          },
        },
        quantity_in_cart: 2,
        userid: 1,
      },
      {
        id: 52,
        item: {
          id: 1,
          item_name: "jb4l778",
          price: 0.999,
          offer: 0,
          qty_avlb: 7,
          delivery_time: 19,
          description: "some chocolate",
          img_name: "munch.jpg",
          category: {
            id: 1,
            category_name: "earphones",
          },
        },
        quantity_in_cart: 2,
        userid: 1,
      },
      {
        id: 52,
        item: {
          id: 1,
          item_name: "jb4l778",
          price: 0.999,
          offer: 0,
          qty_avlb: 7,
          delivery_time: 19,
          description: "some chocolate",
          img_name: "munch.jpg",
          category: {
            id: 1,
            category_name: "earphones",
          },
        },
        quantity_in_cart: 2,
        userid: 1,
      },
    ];
    const d = [data.item]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.carts}>
            {data.map((data) => {
              return <Cart {...data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carts