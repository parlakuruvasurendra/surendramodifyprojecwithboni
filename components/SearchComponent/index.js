import React from 'react'
import {BiSearch} from 'react-icons/bi'
import ProductsComponent from '../ProductDetailsComponent'
import SearchStyles from '../../styles/Search.module.css'

const productDetailsData = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660341019/NicePng_carrot-png_143608_qrtdxb.png',
    styleType: 'Carrot (1 Kg)',
    price: 40,
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660342956/71VeXcvlbYL._SX569__wagpai.jpg',
    styleType: 'Organic tattva - Organic Wheat flour (..',
    price: 400,
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660343268/appleImage_nfx9dg.jpg',
    styleType: 'Apples',
    price: 50,
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/den2yh2w9/image/upload/v1660343579/eggtray_jnwwos.jpg',
    styleType: 'Egg (1 dozen)',
    price: 72,
  },
]

const SearchComponent = () => (
  <div>
    <div className={SearchStyles.searchContainer}>
      <div className={SearchStyles.inputAndSearchIconContainer}>
        <input
          type="search"
          className={SearchStyles.inputStyling}
          placeholder="Search for Products or Services"
        />
        <BiSearch className={SearchStyles.searchIconStyling} />
      </div> 
    </div>
    <ul className={SearchStyles.productsContainer}>
    <ProductsComponent/>
    </ul>
  </div>
)

export default SearchComponent

