import {BiRupee} from 'react-icons/bi'
import ProductDetailsStyles from '../../styles/ProductDetails.module.css'

const ProductsComponent = () => {
  return (
    <div>
      <div className={ProductDetailsStyles.container}>
        <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660341019/NicePng_carrot-png_143608_qrtdxb.png" alt="carrots" className={ProductDetailsStyles.imageStyling} />
        <div className={ProductDetailsStyles.allItemsContainer}>
          <div className={ProductDetailsStyles.priceAndStyleContainer}>
            <h1 className={ProductDetailsStyles.styleStyling}>Carrot (1 Kg)</h1>
            <div className={ProductDetailsStyles.moneyFlexedContainer}> 
            <div className={ProductDetailsStyles.rupeeContainer}>
              <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
              <p className={ProductDetailsStyles.priceStyling}>
                40/kg</p>
            </div>
            <div className={ProductDetailsStyles.rupeeContainer}>
              <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
              <p className={ProductDetailsStyles.priceStyling2}>
                50/kg</p>
            </div>
            </div>
          </div>
          <button type="button" className={ProductDetailsStyles.addButtonStyling}>
            ADD
          </button>
        </div>
      </div>

    <div className={ProductDetailsStyles.container2}>
    <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660342956/71VeXcvlbYL._SX569__wagpai.jpg" alt="Maidha" className={ProductDetailsStyles.imageStyling} />
    <div className={ProductDetailsStyles.allItemsContainer}>
      <div className={ProductDetailsStyles.priceAndStyleContainer}>
        <h1 className={ProductDetailsStyles.styleStyling}>Organic tattva - Organic Wheat flour (..</h1>
        <div className={ProductDetailsStyles.rupeeContainer}>
          <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
          <p className={ProductDetailsStyles.priceStyling}>200/kg</p>
        </div>
      </div>
      <button type="button" className={ProductDetailsStyles.addButtonStyling2}>
        OUT OF STOCK
      </button>
    </div>
    </div>
      <div className={ProductDetailsStyles.container}>
      <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660343268/appleImage_nfx9dg.jpg" alt="carrots" className={ProductDetailsStyles.imageStyling} />
      <div className={ProductDetailsStyles.allItemsContainer}>
        <div className={ProductDetailsStyles.priceAndStyleContainer}>
          <h1 className={ProductDetailsStyles.styleStyling}>Apples</h1>
          <div className={ProductDetailsStyles.rupeeContainer}>
            <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
            <p className={ProductDetailsStyles.priceStyling}>40/kg</p>
          </div>
        </div>
        <button type="button" className={ProductDetailsStyles.addButtonStyling}>
          ADD
        </button>
      </div>
    </div>
          <div className={ProductDetailsStyles.container}>
          <img src="https://res.cloudinary.com/den2yh2w9/image/upload/v1660343579/eggtray_jnwwos.jpg" alt="carrots" className={ProductDetailsStyles.imageStyling} />
          <div className={ProductDetailsStyles.allItemsContainer}>
            <div className={ProductDetailsStyles.priceAndStyleContainer}>
              <h1 className={ProductDetailsStyles.styleStyling}> Egg (1 dozen)</h1>
              <div className={ProductDetailsStyles.rupeeContainer}>
                <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
                <p className={ProductDetailsStyles.priceStyling}>40/kg</p>
              </div>
            </div>
            <button type="button" className={ProductDetailsStyles.addButtonStyling}>
              ADD
            </button>
          </div>
        </div>
        </div>
    
  )
}

export default ProductsComponent