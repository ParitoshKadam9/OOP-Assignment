import React from 'react'
import logo from '../../public/Innovfide.png'
import Image from 'next/image'
import styles from '../../styles/Navbar/navbar.module.css'
import { useState } from 'react'
import { props } from "../../Helper/detail";
import Link from 'next/link'

function Navbar() {
    const [on, setOn] = useState(0)
    const list = [
        {
            id: 1,
            img: false,
            name: "Laptops",
            tag: "/products",
        },
        {
            id: 2,
            img: false,
            name: "Mobiles",
            tag: "/producrt",
        },
        {
            id: 3,
            img: false,
            name: "Accessories",
            tag: "/products",
        },
        {
            id: 4,
            img: true,
            name: "Laptop",
            tag: "../../public/m.png",
        },
        {
            id: 5,
            img: false,
            name: "Headphones",
            tag: "",
        },
        {
            id: 6,
            img: false,
            name: "TVs",
            tag: "",
        },
        {
            id: 7,
            img: false,
            name: "Yashraj",
            tag: "",
        },
    ];

        const [listt, setList] = useState({
          id: "",
          name: "",
          disc: "",
          cost: "",
        });

  return (
    <>
      <props.Provider value={{ listt, setList }}>
        <div className={styles.main}>
          {list.map((data) => {
            return data.img ? (
              <>
                <div className={styles.img} key={data.id}>
                  <Image src={logo} width={90} height={17} />
                </div>
              </>
            ) : (
              <>
                <div
                  className={on == data.id ? styles.navOn : styles.nav}
                  key={data.id}
                  onClick={() => {
                    setOn(data.id);
                    /*call api and get the list */
                    /*add the list to the listt hook which will change it globally*/
                  }}
                >
                  <Link href={data.tag}>{data.name}</Link>
                </div>
              </>
            );
          })}
        </div>
      </props.Provider>
    </>
  );
}

export default Navbar