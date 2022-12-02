import Navbar from '../components/navbar/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='render'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
