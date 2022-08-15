import {BiRupee} from 'react-icons/bi'
import ProductDetailsStyles from '../../styles/ProductDetails.module.css'

const ProductDetailsComponent = props => {
  const {passingProductData} = props
  const {imageUrl, price, styleType} = passingProductData

  return (
    <li className={ProductDetailsStyles.defaultStyles}>
      <div className={ProductDetailsStyles.container}>
        <img src={imageUrl} alt={styleType} className={ProductDetailsStyles.imageStyling}/>
        <div className={ProductDetailsStyles.allItemsContainer}>
          <div className={ProductDetailsStyles.priceAndStyleContainer}>
            <h1 className={ProductDetailsStyles.styleStyling}>{styleType}</h1>
            <div className={ProductDetailsStyles.rupeeContainer}>
              <BiRupee className={ProductDetailsStyles.rupeeStyling}/>
              <p className={ProductDetailsStyles.priceStyling}>{price}</p>
            </div>
          </div>
          <button type="button" className={ProductDetailsStyles.addButtonStyling}>
            ADD
          </button>
        </div>
      </div>
    </li>
  )
}

export default ProductDetailsComponent