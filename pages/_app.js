import { useState } from 'react';
import Navbar from '../components/navbar/navbar'
import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [nav, setNav] = useState(true)
  const [foot, setFoot] = useState(true)

  let params;
 
  useEffect(() => {
    if (process.browser) {
      params = window.location.pathname;
      console.log(params);

      if (
        params == '/Login' || params == '/signUp'
      ) {
        setNav(false);
        setFoot(false);
        console.log(nav);
      }
    }
  }, [params]);
  return (
    <>{
      nav ? (
      <>
        <div className='navbar'>
          <Navbar/>
        </div>
      </>
      ) :
        (<>
        </>)
    }
      <div className='render'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
