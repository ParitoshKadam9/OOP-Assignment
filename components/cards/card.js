import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Cards/card.module.css'
import { Detailed } from '../../Helper/detail';
import { useContext } from 'react';
import { loadprop } from '../../Helper/detail';

function Card(data) {
    const { det, setDet } = useContext(Detailed)
    const {pro, setPro} = useContext(loadprop)
  return (
    <>
      <div className={styles.container} key={data.id}>
        <div className={styles.img}>
          <Image src="/mac.jpg" width={250} height={150}></Image>
        </div>
        <div className={styles.info}>
          <div
            className={styles.name}
            onClick={() => {
              setDet(false)
              setPro({id : data.id, name: data.item_name, disc: data.description, cost: data.price})  
            //   setPro({...pro, disc : disc})  
            //   setPro({...pro, name : name})  
            //   setPro({...pro, cost : cost})  
            //     console.log(pro)
            }}
          >
            {data.item_name}
          </div>
          <div className={styles.disc}>{data.item_name}</div>
          <div className={styles.cost}>Cost: {data.price}</div>
          <div className={styles.paynow}>
            <div className={styles.buy}>Buy</div>
            <div className={styles.buy2}>Add to Cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card