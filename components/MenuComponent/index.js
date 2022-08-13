import { Component } from 'react'
import Link from 'next/link'

import MenuStyles from '../../styles/Menu.module.css'


class MenuComponent extends Component{
  state = {menuActive:true ,aboutActive:false}


  onClickButton=()=>{
    const {menuActive,aboutActive} = this.state
    if(aboutActive){
      this.setState(prevState =>({
        aboutActive: !prevState.aboutActive
      }))
    }
    this.setState(prevState =>({
      menuActive:!prevState.menuActive
    }))

  }


  onClickButton2=()=>{
    const {menuActive,aboutActive} = this.state
    if(menuActive){
      this.setState(prevState =>({
        menuActive: !prevState.menuActive,
      }))
    }
    this.setState(prevState =>({
      aboutActive:!prevState.aboutActive
    }))
  }


  render(){

    const {menuActive,aboutActive} = this.state

    const colorApplied = menuActive ? "#6a5bff" : "#ffffff"
    const textColor = menuActive ? "#ffffff" : "#6a5bff"

    const aboutColorApplied = aboutActive ? "#6a5bff" : "#ffffff"
    const aboutTextColorApplied = aboutActive ? "#ffffff" : "#6a5bff"

    return(
      <div className={MenuStyles.menuContainer}>
      <div className={MenuStyles.menuButtonsContainer}>
        <Link href='/'>
        <button type="button" style={{backgroundColor:colorApplied,color:textColor}} 
        className={MenuStyles.buttonsStyling} onClick={this.onClickButton}>
          Menu
        </button> 
        </Link>        
        <Link href='/about'>
        <button type="button" 
        onClick={this.onClickButton2}
        style={{backgroundColor:aboutColorApplied,color:aboutTextColorApplied}}
         className={MenuStyles.buttonsStyling2}>
          About
        </button>
        </Link>
      </div>
    </div>
    )
  }
}

  export default MenuComponent