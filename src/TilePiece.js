import React, {useEffect, useState, useRef} from 'react'
import {GiSwordWound, GiShield, GiAnglerFish, GiAncientSword, GiBigWave, GiBladeBite, GiBoltShield, GiCampfire, GiChessRook} from 'react-icons/gi'

const TilePiece = ({tileData, funcToggle, index, onDoubleClick, isActive}) => {
  const [processedData, setProcessedData] = useState({
    color: '',
    flag: '',
    visibleFlag: false,
    selectable: false,
    changeable: false,
    isParty: false,
    description: '',
  })
  
  useEffect(()=>{
    let setupDataObj = {
      color: '',
      flag: '',
      visibleFlag: false,
      selectable: false,
      changeable: false,
      isParty: false,
      description: '',
    }
    if(funcToggle == true) {setupDataObj.selectable = true} else {setupDataObj.selectable = false}

    switch(tileData[1]) {
      case 'rowansport': {
        setupDataObj.color = 'yellow'
      } break;
      case 'eldritch': {
        setupDataObj.color = 'purple'
      } break;
      case 'demons': {
        setupDataObj.color = 'black'
      } break;
      case 'pilrith': {
        setupDataObj.color = 'pink'
      } break;
      case 'lords': {
        setupDataObj.color = 'red'
      } break;
      case 'volsung': {
        setupDataObj.color = 'green'
      } break;
      case 'riverlands': {
        setupDataObj.color = 'blue'
      } break;
      default: {
        setupDataObj.color = ''
      }
    }

    let arrayOfIcons = [ <GiSwordWound />, <GiShield />, <GiAnglerFish/>, <GiAncientSword/>, <GiBigWave/>, <GiBladeBite/>, <GiBoltShield/>, <GiCampfire/>, <GiChessRook/>]
    arrayOfIcons.map((icon, index)=>{
      // console.log(icon.type.name)
      if (tileData[2] == icon.type.name) {
        setupDataObj.flag = icon
      }
    })


    setProcessedData(setupDataObj)
    // console.log(setupDataObj)
    if (setupDataObj.color != 'tile-piece ') {
      // console.log(setupDataObj)
    } else {
      // console.log('AHH')
    }
  }, [tileData])
  
  // const tileClickFunc = (tileData, index, e) => {
  //   updateSelectedTile(index)
  //   console.log(tileData, index)
  // }
  
if (processedData.selectable == false) {
  return(
    <div className={`tile-piece ${processedData.color}`} >
      <div style={{
          position: 'absolute',
          zIndex: '10',
          fontSize: '30px',
          top: '25px',
          left: '20px',
          color: 'rgba(255,255,255,0.7)',
        }}></div>
    </div>
  )
} else if (processedData.selectable == true) {
  if (isActive == true) {
    <div className={`tile-piece ${processedData.color} pointer active`} onDoubleClick={onDoubleClick}>
        <div className='tile-flag' style={{
          position: 'absolute',
          zIndex: '10',
          fontSize: '40px',
          top: '25px',
          left: '25px',
          color: 'rgba(255,255,255,0.9)',
        }}>{processedData.flag}</div>
      </div>
  } else {
    return(
      <div className={`tile-piece ${processedData.color} pointer`} onDoubleClick={onDoubleClick}>
        <div className='tile-flag' style={{
          position: 'absolute',
          zIndex: '10',
          fontSize: '40px',
          top: '25px',
          left: '25px',
          color: 'rgba(255,255,255,0.9)',
        }}>{processedData.flag}</div>
      </div>
    )
  }
    
}
    

}

export default TilePiece