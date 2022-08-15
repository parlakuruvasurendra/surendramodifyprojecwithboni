import Popup from 'reactjs-popup'
import {BiRupee} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'
import {MdOutlineNavigateNext} from 'react-icons/md'
import CartStyles from '../../styles/Cart.module.css'

const CartItemComponent = () => (
  <div className={CartStyles.buttonsContainer}>
    <button type="button" className={CartStyles.cartButton}>
      <p className={CartStyles.items}>Total Items | 2</p>
      <p className={CartStyles.items2}>
        Total amount | <BiRupee className={CartStyles.rupee}/>
        600
      </p>
    </button>
    <Popup  
    modal
    trigger={
      <button type="button" className={CartStyles.cartButton2}>
      <p className={CartStyles.items3}>BOOK WITH 
      <img
        src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660357134/Vector_2_gad9lv.png"
        alt="binoLogo"
        className={CartStyles.binoLogoStyling}
      />APP </p>
      <MdOutlineNavigateNext className={CartStyles.nextIcon} />
    </button>
    }
    position="top center"
    >
      {close =>(
          <div className={CartStyles.popupContainer}>
            <button className={CartStyles.outerCloseButton} 
              onClick={() => close()}>
                <GrFormClose className={CartStyles.closeButton}/>
              </button>  
                <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660375232/Calendar_Collapsed_Light_calenderImage_w48fzp.png" alt="calenderImage" className={CartStyles.CalenderImageStyling}/>              
              <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660375242/Frame_582timeImage_t4wpuw.png" alt="timerSlotBooking" className={CartStyles.setTimerBooking}/>
          </div>
      )} 
    </Popup>

  </div>
)

export default CartItemComponent