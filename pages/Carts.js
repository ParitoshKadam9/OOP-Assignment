import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart/cart'
import styles from '../styles/Cart/cart.module.css'

function Carts() {
  const config={
    headers:{
      token : Cookies.get('password')
    }
  }
  useEffect(()=>{
    axios.get(`http://localhost:9191/cart/user/${Cookies.get('id')}`, config).then(res=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])
    const [data, setData] = useState([]);
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