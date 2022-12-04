import React, { use, useState } from 'react'
import styles from '../../styles/Admin/admin.module.css'
import { Updat } from '../../Helper/detail'
import Link from 'next/link'
import { useContext } from 'react'


function Admin() {

  const list = [
    {
      id: 1,
      name: "Mobiles",
      categoryId: 1
    },
    {
      id: 2,
      name: "Laptops",
      categoryId: 2
    },
    {
      id: 3,
      name: "Accessories",
      categoryId: ''
    },
    {
      id: 4,
      name: "HeadPhones",
      categoryId: ''
    },
    {
      id: 5,
      name: "Yashraj",
      categoryId: ''
    },
    {
      id: 6,
      name: "Yashraj",
      categoryId: ''
    },

  ]
  const render = []
  const [render2, setRender] = useState([])
  //   {
  //     id: 3,
  //     item_name: "jbl152",
  //     price: 1.399,
  //     offer: 0,
  //     qty_avlb: 9,
  //     delivery_time: 19,
  //     description: "some chocolate",
  //     img_name: "munch.jpg",
  //     category: {
  //       id: 1,
  //       category_name: "earphones2",
  //     },
  //   },
  // ]);
  const [dataa, setdata] = useState([
    {
      "id": 1,
      "item_name": "jbl190",
      "price": 1.399,
      "offer": 0,
      "qty_avlb": 9,
      "delivery_time": 19,
      "description": "some chocolate",
      "img_name": "munch.jpg",
      "category": {
        "id": 2,
        "category_name": "earphones"
      }
    },
    {
      "id": 2,
      "item_name": "jbl1590",
      "price": 1.399,
      "offer": 0,
      "qty_avlb": 9,
      "delivery_time": 19,
      "description": "some chocolate",
      "img_name": "munch.jpg",
      "category": {
        "id": 2,
        "category_name": "earphones"
      }
    },
    {
      "id": 3,
      "item_name": "jbl152",
      "price": 1.399,
      "offer": 0,
      "qty_avlb": 9,
      "delivery_time": 19,
      "description": "some chocolate",
      "img_name": "munch.jpg",
      "category": {
        "id": 1,
        "category_name": "earphones2"
      }
    },
    {
      "id": 4,
      "item_name": "jbl1452",
      "price": 1.399,
      "offer": 0,
      "qty_avlb": 9,
      "delivery_time": 19,
      "description": "some chocolate",
      "img_name": "munch.jpg",
      "category": {
        "id": 1,
        "category_name": "earphones2"
      }
    }
  ]
  )

  const [det, setDet] = useState(false)
  // const [detailed, setDetailed] = useState(false)
  let x;
  return (
    <>
      {!det ? (
        <>
          <div className={styles.add}>
            <Link href="/Admin/addCat">Add Category</Link>
          </div>
          <div className={styles.logOut}>LogOut</div>
          <div className={styles.adminContainer}>
            <div className={styles.header1}>Welcome, Admin mc</div>
            <div className={styles.categories}>
              {list.map((data) => {
                return (
                  <div
                    className={styles.category}
                    key={data.id}
                    onClick={async () => {
                      for (let i = 0; i < dataa.length; i++) {
                        x = data.categoryId;
                        // console.log(dataa[i]);
                        if (dataa[i].category.id == x) {
                          render.push(dataa[i]);
                          // setRender({...render})
                          // console.log(render)
                        }
                      }
                      // for (let i = 0; i < render.length; i++){
                      //   setRender({...render2, render[i]})
                      // }
                      setRender(render2.concat(render));
                      console.log(render2);
                      console.log(render);
                      render;
                      setDet(true);
                    }}
                  >
                    <div className={styles.icon}></div>
                    <div className={styles.name}>{data.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.add}>
            <Link href="/Admin/addProd">Add product</Link>
          </div>
          <div
            className={styles.back}
            onClick={() => {
              console.log(render);
              setDet(false);
              setRender([]);
              // render2.length=0
              // setRender({...render2})
              console.log(render[1]);
            }}
          >
            Back
          </div>
          <div className={styles.list}>
            {render2.length != 0 ? (
              <>
                {render2.map((data) => {
                  return (
                    <div className={styles.container} key={data.id}>
                      <div className={styles.image}></div>
                      <div
                        className={styles.header}
                        onClick={() => {
                          setDetailed(true);
                        }}
                      >
                        {data.item_name}
                      </div>
                      {/* <div className={styles.btn}>Add</div> */}
                      <div className={styles.btn} onClick={() => {}}>
                        <Link
                          href={{
                            pathname: "/Admin/update",
                            query: data,
                          }}
                        >
                          Update
                        </Link>
                      </div>
                      <div className={styles.btn}>Delete</div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>No items found</>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Admin