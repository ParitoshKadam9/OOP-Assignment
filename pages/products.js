import React from 'react'
import { Detailed } from "../Helper/detail";
import { loadprop } from "../Helper/detail";
import { props } from '../Helper/detail';
import Card from '../components/cards/card';
import { useState } from "react";
import styles from '../styles/prods.module.css'

function Products() {
      const [det, setDet] = useState(true);
      const [pro, setPro] = useState({
        id: "",
        name: "",
        disc: "",
        cost: "",
      });
    
    const [listt, setList] = useState([{
      id: 1,
      name: "adsdad",
      disc: "",
      cost: "",
    }]);
  return (
    <>
      <props.Provider value={{ listt, setList }}>
        <loadprop.Provider value={{ pro, setPro }}>
          <Detailed.Provider value={{ det, setDet }}>
            {det ? (
              <>
                <div className={styles.container}>
                  {listt.map((data) => {
                    return (
                      <>
                        <div className={styles.card}>
                          <Card {...data} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div
                  className={styles.back}
                  onClick={() => {
                    setDet(true);
                  }}
                >
                  Back
                </div>
                <div className={styles.cont}>
                  <div className={styles.image}>abc</div>
                  <div className={styles.details}>
                    <div className={styles.name}>{pro.name}</div>
                    <div className={styles.lower}># {pro.disc}</div>
                    <div className={styles.lower}> # {pro.disc}</div>
                    <div className={styles.lower}># {pro.disc}</div>
                    <div className={styles.cost}>{pro.cost}</div>
                    <div className={styles.pay}>
                      <div className={styles.buy}>Buy Now</div>
                      <div className={styles.buy2}>Add to cart</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Detailed.Provider>
        </loadprop.Provider>
      </props.Provider>
    </>
  );
}

export default Products