import {useState, useEffect} from 'react'
import {BiExpand } from 'react-icons/bi'
import {BsHexagonHalf} from 'react-icons/bs'


const HeaderBar = ({setChosenTool}) => {

const buttonClick = (val) => {
  setChosenTool(val)
}

  return(
    <div className="header-bar">
      <div className='header-button' onClick={()=>buttonClick('flag')}><BsHexagonHalf/></div>
      <div className='header-button' onClick={()=>buttonClick('pan')}><BiExpand /></div>
    </div>
  )
}
export default HeaderBar