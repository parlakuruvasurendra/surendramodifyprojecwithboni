import React from 'react'
import Image from 'next/image'
import ShopStyles from '../../styles/Shop.module.css'
import {IoMdShareAlt} from 'react-icons/io'

const ShopComponent = () => (
  <div className={ShopStyles.shopContainer}>
    <div className={ShopStyles.innerContainer}>
      <img
        src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660136387/saloonShopImage_gypqzt.png"
        alt="saloonShopImage"
        className={ShopStyles.saloonShopStyling}
      />
      <div className={ShopStyles.headingUlContainer}>
        <h1 className={ShopStyles.rockHeading}>Rock Hair Dressers</h1>
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
        Salon
        </button>
        
      </div>
    </div>
    <IoMdShareAlt size={30} className={ShopStyles.shareIconStyling}/>
  </div>
)

export default ShopComponent