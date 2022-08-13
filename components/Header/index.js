import React from 'react'
import HeaderStyles from '../../styles/Header.module.css'


const Header = () => (
    <nav className={HeaderStyles.navContainer}>
      <img
        src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660135227/navtagImage_fxafyo.png"
        alt="binoLogo"
        className={HeaderStyles.binoStyling}
      />
      <div className={HeaderStyles.spanContainer}>
        <h1 className={HeaderStyles.poweredHeading}>
          Powered by <span className={HeaderStyles.spanElementStyling}>boni</span>
        </h1>
      </div>
    </nav>
  )
  
  export default Header