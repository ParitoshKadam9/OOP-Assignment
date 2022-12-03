import React, { useEffect, useState } from 'react'
import styles from '../styles/Auth/signup.module.css'

function Signup() {
    const [user, setUser] = useState({
        userName: '',
        password: '',
        checkPassword: '',
        phone: null,
        email: '',
        address: {
            line: '',
            line2: "",
            city: '',
            state: '',
            country: "",
            pincode:null
        },
        wallet: 1000.00

    })

    const handleChange = (e) => {
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const [match, setMatch] = useState(true)

    useEffect(() => {
        if (user.password != user.checkPassword) {
         setMatch(false)
        }
        else {
            setMatch(true)
        }
    }, [user.checkPassword])
    
    useEffect(() => {
        user.checkPassword = null
        setUser({...user})
    }, [user.password])
    
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>Sign Up</div>
          <div className={styles.inputs}>
            <div className={styles.inputBlock}>
              <div className={styles.name}>UserName</div>
              <input
                className={styles.input}
                type="text"
                value={user.userName}
                name="userName"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={match ? styles.name : styles.name2}>Password</div>
              <input
                className={match ? styles.input : styles.input2}
                type="password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={match ? styles.name : styles.name2}>
                Confirm Password
              </div>
              <input
                className={match ? styles.input : styles.input2}
                type="password"
                value={user.checkPassword}
                name="checkPassword"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.name}>Phone Number</div>
              <input
                className={styles.input}
                type="text"
                value={user.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.name}>Email</div>
              <input
                className={styles.input}
                type="email"
                value={user.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.name}>Address Line 1</div>
              <input
                className={styles.input}
                type="email"
                value={user.address.line}
                name="address.line"
                onChange={(e) => {
                  user.address.line = e.target.value;
                  setUser({ ...user });
                  console.log(user);
                }}
              />
            </div>
            <div className={styles.inputBlock}>
              <div className={styles.name}>Address Line 2</div>
              <input
                className={styles.input}
                type="text"
                value={user.address.line2}
                name="address.line2"
                onChange={(e) => {
                  user.address.line2 = e.target.value;
                  setUser({ ...user });
                }}
              />
            </div>
            <div className={styles.inputBlock2}>
              <div className={styles.left}>
                <div className={styles.inputbloc}>
                  <div className={styles.head}>City</div>
                  <input
                    type="text"
                    className={styles.input3}
                    value={user.address.city}
                    onChange={(e) => {
                      user.address.city = e.target.value;
                      setUser({ ...user });
                    }}
                  />
                </div>
                <div className={styles.inputbloc}>
                  <div className={styles.head}>State</div>
                  <input
                    type="text"
                    className={styles.input3}
                    value={user.address.state}
                    onChange={(e) => {
                      user.address.state = e.target.value;
                      setUser({ ...user });
                    }}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.inputbloc}>
                  <div className={styles.head}>Country</div>
                  <input
                    type="text"
                    className={styles.input3}
                    value={user.address.country}
                    onChange={(e) => {
                      user.address.country = e.target.value;
                        setUser({ ...user });
                    }}
                  />
                </div>
                <div className={styles.inputbloc}>
                  <div className={styles.head}>Pincode</div>
                  <input
                    type="text"
                    className={styles.input3}
                    value={user.address.pincode}
                    onChange={(e) => {
                      user.address.pincode = e.target.value;
                      setUser({ ...user });
                    }}
                  />
                </div>
              </div>
                      </div>
                      <div className={styles.submit}>Submit</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup
