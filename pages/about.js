import AboutStyles from '../styles/About.module.css'
import {GrLocation} from 'react-icons/gr'

const About = () =>(
    <div className={AboutStyles.aboutContainer}>
        <div className={AboutStyles.innerContainer}>
        <h1 className={AboutStyles.aboutHeading}>About </h1>
        <p className={AboutStyles.aboutParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut orci efficitur, placerat nisl nec, fermentum magna. Phasellus fermentum libero eu vehicula tincidunt. Quisque pulvinar commodo nunc, ac interdum nisl commodo eu.
        </p>
        <h1 className={AboutStyles.contactHeading}>Contact</h1>
        <div className={AboutStyles.buttonAndLocationAndAddressContainer}> 
        <div className={AboutStyles.locationAndAddressContainer}>
        <img src='https://res.cloudinary.com/den2yh2w9/image/upload/v1660355961/Vector_egjngb.png' className={AboutStyles.locationIcon}/>
        <p className={AboutStyles.addressStyling}>Sahakar Nagar, Bangalore, 560000</p>
        </div>
        <a
            href="https://www.justdial.com/Delhi/Rock-hair-dresser-Near-Mother-Dairy-Palam-Colony/011PXX11-XX11-161022160530-R1T1_BZDET"
            target="_blank"
            rel="noreferrer"
          >
             <button type='button' className={AboutStyles.mapButton}>Map</button>
          </a>
       
        </div>
        </div>
    </div>
)

export default About