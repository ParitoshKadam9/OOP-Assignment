import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Cards/card.module.css'
import { Detailed } from '../../Helper/detail';
import { useContext } from 'react';
import { loadprop } from '../../Helper/detail';

function Card({ id, name, disc, cost}) {
    const { det, setDet } = useContext(Detailed)
    const {pro, setPro} = useContext(loadprop)
  return (
    <>
      <div className={styles.container} key={id}>
        <div className={styles.img}>
          <Image src="/mac.jpg" width={250} height={150}></Image>
        </div>
        <div className={styles.info}>
          <div
            className={styles.name}
            onClick={() => {
              setDet(false)
              setPro({id : id, name:name, disc: disc, cost: cost})  
            //   setPro({...pro, disc : disc})  
            //   setPro({...pro, name : name})  
            //   setPro({...pro, cost : cost})  
            //     console.log(pro)
            }}
          >
            {name}
          </div>
          <div className={styles.disc}>{disc}</div>
          <div className={styles.cost}>Cost: {cost}</div>
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