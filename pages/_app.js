// import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import ShopComponent from '../components/ShopComponent'
import MenuComponent from '../components/MenuComponent'
import '../styles/globals.css'


const  MyApp = ({ Component, pageProps }) => {
  return <>
  
  <Header/>
  <ShopComponent/>
  <MenuComponent/>
  <Component {...pageProps} />
  
  
  </>
  
}

export default MyApp
