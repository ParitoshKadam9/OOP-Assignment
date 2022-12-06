import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styles from '../../styles/Admin/delcat.module.css'

function delCat() {
    const [data, setData] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setData({ [e.target.name]:e.target.value})
        console.log(data)
    }
  return (
    <>
      <div className={styles.back}>
        <Link href="/Manager/manager">Back</Link>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head}>Delete Categories</div>
          <div className={styles.inputs}>
            {/* <div className={styles.inputbox}>
              <div className={styles.name}>Category ID</div>
              <input
                className={styles.input}
                value={data.id}
                name="id"
                onChange={handleChange}
              />
            </div> */}
            <div className={styles.inputbox}>
              <div className={styles.name}>Category Id</div>
              <input
                className={styles.input}
                value={data.id}
                name="id"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.submit} onClick={() => {
            console.log(data)
            const lel = `http://localhost:9191/manager/categories/delete/${Object.values(data)}`
            axios.delete(lel).catch(err=>{console.log(err, data)});
          }}><Link
                          href={{
                            pathname: "/Manager/manager",
                            query: false,
                          }}
          > Delete Category
          </Link></div>
        </div>
      </div>
    </>
  );
}

export default delCat