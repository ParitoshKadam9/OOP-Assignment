import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styles from '../../styles/Admin/addcat.module.css'

function AddCat() {
    const [data, setData] = useState([])

    const handleChange = (e) => {
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }
  return (
    <>
      <div className={styles.back}>
        <Link href="/Admin/admin">Back</Link>
      </div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.head}>Add Categories</div>
          <div className={styles.inputs}>
            <div className={styles.inputbox}>
              <div className={styles.name}>Category ID</div>
              <input
                className={styles.input}
                value={data.id}
                name="id"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputbox}>
              <div className={styles.name}>Category Name</div>
              <input
                className={styles.input}
                value={data.name}
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.submit} onClick={() => {
            axios.post("http://localhost:9191/admin/categories/add", data);
          }}><Link
                          href={{
                            pathname: "/Admin/admin",
                            query: true,
                          }}
          > Add Category
          </Link></div>
        </div>
      </div>
    </>
  );
}

export default AddCat