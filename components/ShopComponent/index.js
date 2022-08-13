import React from 'react'
import ShopStyles from '../../styles/Shop.module.css'
import {IoMdShareAlt} from 'react-icons/io'

const ShopComponent = () => (
  <div className={ShopStyles.shopContainer}>
    <div className={ShopStyles.innerContainer}>
      <img
        src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660339442/Rectangle_368kiranaImage_zbnje3.png"
        alt="kiranaLogo"
        className={ShopStyles.saloonShopStyling}
      />
      <div className={ShopStyles.headingUlContainer}>
        <h1 className={ShopStyles.rockHeading}>Chamundeshwari Chamarajan Kirana Store</h1>
        <ul className={ShopStyles.ulContainer}>
          <li className={ShopStyles.removingDefaultStyles}>
            <img
              src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660137922/Group_289_rm1vvn.png"
              alt="circle"
            />
            <span className={ShopStyles.openSpanElement}>Open</span>
          </li>
          <li className={ShopStyles.removingDefaultStyles}>
            <img
              src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660138455/Group_288_waatao.png"
              alt="distanceLogo"
            />
            <span className={ShopStyles.distanceStyling}>2.3 km</span>
          </li>       
            <li className={ShopStyles.removingDefaultStyles}>
              <img
                src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660138863/Group_460_rrxrqk.png"
                alt="map"
              />
              <span className={ShopStyles.distanceStylingText}>View on map</span>
            </li>  
        </ul>
        <button type="button" className={ShopStyles.saloonButtonStyling}>
          Groceries
        </button>
        <button type="button" className={ShopStyles.saloonButtonStyling}>
          Fruits
        </button>
        <button type="button" className={ShopStyles.saloonButtonStyling}>
          Vegetables
        </button>
      </div>
    </div>
    <IoMdShareAlt size={30} className={ShopStyles.shareIconStyling}/>
  </div>
)

export default ShopComponent