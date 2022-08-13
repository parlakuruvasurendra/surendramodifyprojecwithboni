import Head from 'next/head'
import Image from 'next/image'
import { Route,Switch } from 'react-router-dom'

import ProductAndCartComponent from '../components/ProductAndCartComponent'
// import AboutComponent from '../components/AboutComponent'

const Home = ()=>(
  <div>
    <Head>
      <title>SurendraProject</title>
    </Head>
    <ProductAndCartComponent/>
    
  </div>
)

export default Home