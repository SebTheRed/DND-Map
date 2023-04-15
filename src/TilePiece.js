import React, {useEffect, useState, useRef} from 'react'
import {GiSwordWound, GiShield, GiAnglerFish, GiAncientSword, GiBigWave, GiBladeBite, GiBoltShield, GiCampfire, GiChessRook} from 'react-icons/gi'

const TilePiece = ({tileData, funcToggle, index, onDoubleClick, isActive, tileType, territoryType}) => {
  const [isTileActive, setIsTileActive] = useState(false)
  const [processedData, setProcessedData] = useState({
    color: '',
    flag: '',
    visibleFlag: false,
    selectable: false,
    changeable: false,
    isParty: false,
    description: '',
  })
  
  useEffect(() => {
    if(isActive == true) {
      setIsTileActive(true)
    } else if (isActive == false) {
      setIsTileActive(false)
    }
  }, [isActive])

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

    switch(tileData[2]) {
      case 'GiShield': {
        setupDataObj.flag = <GiShield />
    
      } break;
      case 'GiBladeBite': {
        setupDataObj.flag = <GiBladeBite />

      } break;
      case 'GiCampfire': {
        setupDataObj.flag = <GiCampfire />

      } break;
      case 'GiSwordWound': {
        setupDataObj.flag = <GiSwordWound />

      } break;
      case 'GiAnglerFish': {
        setupDataObj.flag = <GiAnglerFish />
      } break;
      case 'GiBigWave': {
        setupDataObj.flag = <GiBigWave />

      } break;
      case 'GiBoltShield': {
        setupDataObj.flag = <GiBoltShield />

      } break;
      case 'GiChessRook': {
        setupDataObj.flag = <GiChessRook />
  
      } break;
      case 'GiAncientSword': {
        setupDataObj.flag = <GiAncientSword />
      } break;
    }


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

  if (isTileActive == true) {
    return(
      <div className={`tile-piece ${processedData.color} pointer active`} onDoubleClick={onDoubleClick}>
        <div className='tile-flag' style={{
          position: 'absolute',
          zIndex: '10',
          fontSize: '40px',
          top: '25px',
          left: '25px',
          color: 'rgba(255,255,255,0.9)',
        }}></div>
      </div>
    )
} else if (isTileActive == false) {
  if (territoryType == 'colors') {
    if (tileType == 'stamps') {
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
    } else if (tileType == 'nums') {
      return(
        <div className={`tile-piece ${processedData.color} pointer`} onDoubleClick={onDoubleClick}>
          <div className='tile-flag' style={{
            position: 'absolute',
            zIndex: '10',
            fontSize: '20px',
            top: '25px',
            left: '25px',
            color: 'rgba(255,255,255,0.4)',
          }}>{index}</div>
        </div>
      )
    } else if (tileType == 'empty') {
      return(
        <div className={`tile-piece ${processedData.color} pointer`} onDoubleClick={onDoubleClick}>
          <div className='tile-flag' style={{
            position: 'absolute',
            zIndex: '10',
            fontSize: '40px',
            top: '25px',
            left: '25px',
            color: 'rgba(255,255,255,0.9)',
          }}>&nbsp;</div>
        </div>
      )
    } else {}
  } else {
    if (tileType == 'stamps') {
      return(
        <div className={`tile-piece pointer`} onDoubleClick={onDoubleClick}>
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
    } else if (tileType == 'nums') {
      return(
        <div className={`tile-piece pointer`} onDoubleClick={onDoubleClick}>
          <div className='tile-flag' style={{
            position: 'absolute',
            zIndex: '10',
            fontSize: '20px',
            top: '25px',
            left: '25px',
            color: 'rgba(255,255,255,0.4)',
          }}>{index}</div>
        </div>
      )
    } else if (tileType == 'empty') {
      return(
        <div className={`tile-piece pointer`} onDoubleClick={onDoubleClick}>
          <div className='tile-flag' style={{
            position: 'absolute',
            zIndex: '10',
            fontSize: '40px',
            top: '25px',
            left: '25px',
            color: 'rgba(255,255,255,0.9)',
          }}>&nbsp;</div>
        </div>
      )
    } else {}
  }
  
  
}
    

}

export default TilePiece