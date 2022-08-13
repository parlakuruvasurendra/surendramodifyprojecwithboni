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
        <GrLocation className={AboutStyles.locationIcon}/>
        <p className={AboutStyles.addressStyling}>Sahakar Nagar, Bangalore, 560000</p>
        </div>
        <button type='button' className={AboutStyles.mapButton}>Map</button>
        </div>
        </div>
    </div>
)

export default About