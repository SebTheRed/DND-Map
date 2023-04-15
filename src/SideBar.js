import { useEffect, useRef, useState } from "react";
import {GiSwordWound, GiShield, GiAnglerFish, GiAncientSword, GiBigWave, GiBladeBite, GiBoltShield, GiCampfire, GiChessRook} from 'react-icons/gi'
import {GiClick} from 'react-icons/gi'
import {BiHash, BiColor} from 'react-icons/bi'
import {MdHideSource, MdOutlineEmojiFlags} from 'react-icons/md'
import {TbRubberStamp} from 'react-icons/tb'
const SideBar = ({chosenIndexNum, tileData, setTileType, setTerritoryType}) => {
  const [dataCapsule, setDataCapsule] = useState({
      alliance: '',  
      icon: '',
      iconDesc: '',
      title: '',
      desc1: '',
      desc2: '',
      desc3: '',
      playersCanSee: false,
  })
  const buttonClickedToggle = useRef({
    stamps: true,
    nums: false,
  })

  useEffect(() => {
      setDataCapsule({
      alliance: '',  
      icon: <GiClick />,
      iconDesc: 'Double click to choose a tile.',
      title: '',
      desc1: 'Drag and pan to look around.',
      desc2: '',
      desc3: '',
      playersCanSee: true,
      })
    if (tileData[chosenIndexNum] == undefined) {return}
    
    console.log(tileData[chosenIndexNum])
    let setupDataObj = {
      alliance: '',  
      icon: '',
      iconDesc: '',
      title: '',
      desc1: '',
      desc2: '',
      desc3: '',
      playersCanSee: false,
    }
    if (!tileData[chosenIndexNum][2]){
      // setupDataObj.icon = <GiCircleClaws />
    } else {
    switch(tileData[chosenIndexNum][2]) {
      case 'GiShield': {
        setupDataObj.icon = <GiShield />
        setupDataObj.iconDesc = "This area is guarded by allied soldiers."
      } break;
      case 'GiBladeBite': {
        setupDataObj.icon = <GiBladeBite />
        setupDataObj.iconDesc = "This area is under attack by monsters."
      } break;
      case 'GiCampfire': {
        setupDataObj.icon = <GiCampfire />
        setupDataObj.iconDesc = "The party has set up camp here."
      } break;
      case 'GiSwordWound': {
        setupDataObj.icon = <GiSwordWound />
        setupDataObj.iconDesc = "A battle is taking place in this area."
      } break;
      case 'GiAnglerFish': {
        setupDataObj.icon = <GiAnglerFish />
        setupDataObj.iconDesc = "A massive shadow lurks deep below.."
      } break;
      case 'GiBigWave': {
        setupDataObj.icon = <GiBigWave />
        setupDataObj.iconDesc = "This area is suffering extreme storms."
      } break;
      case 'GiBoltShield': {
        setupDataObj.icon = <GiBoltShield />
        setupDataObj.iconDesc = "This area is guarded by allied heroes."
      } break;
      case 'GiChessRook': {
        setupDataObj.icon = <GiChessRook />
        setupDataObj.iconDesc = "An army stands at the ready for battle."
      } break;
      case 'GiAncientSword': {
        setupDataObj.icon = <GiAncientSword />
        setupDataObj.iconDesc = "An ancient power is said to lie here."
      } break;
    }
    
    }
    setupDataObj.alliance = tileData[chosenIndexNum][1]
    setupDataObj.title = tileData[chosenIndexNum][3]
    setupDataObj.desc1 = tileData[chosenIndexNum][5]
    setupDataObj.desc2 = tileData[chosenIndexNum][6]
    setupDataObj.desc3 = tileData[chosenIndexNum][7]
    setupDataObj.playersCanSee = tileData[chosenIndexNum][4]
    setDataCapsule(setupDataObj)
  }, [chosenIndexNum])

  const barToolFunc = (val) => {
    if (val === 'stamps') {
      setTileType(prevType => prevType === 'stamps' ? 'empty' : 'stamps');
    } else if (val === 'nums') {
      setTileType(prevType => prevType === 'nums' ? 'empty' : 'nums');
    }
    console.log(buttonClickedToggle.current)
  }
  const territoryToolFunc = (val) => {
      setTerritoryType(prevType => prevType === 'colors' ? 'empty' : 'colors');
  }

  return(
    <div className="side-bar">
      <div className="info-box"
        style={{
          width: '5em'
        }}>
      <div className="info-field">
          TILE ID
        </div>
        <div className="info-field"
          style={{
            fontSize: '2em'
          }}>
          {chosenIndexNum}
        </div>
      </div>
      <div className="info-box"
        style={{
          width: '30%',
          display: 'flex',
          alignItems: 'flex-start',
          paddingLeft: '10px',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <div className="info-field"
            style={{
              fontSize: '3em',
            }}
          >{dataCapsule.icon}</div>
                  
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div className="info-field"
          style={{
            fontSize: '1.2em'
          }}
        >{dataCapsule.title}</div>
          <div className="info-field"
            style={{
              fontSize: '1em'
            }}
          >{dataCapsule.iconDesc}</div>
        </div>
      </div>
      <div className="info-box"
        style={{
          width: '50%',
          display: 'flex',
          alignItems: 'flex-start',
          paddingLeft: '10px',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
        <div className="info-field"
          style={{
            fontSize: '1em'
          }}
        >{dataCapsule.desc1}</div>
        <div className="info-field"
          style={{
            fontSize: '1em'
          }}
        >{dataCapsule.desc2}</div>
        <div className="info-field"
          style={{
            fontSize: '1em'
          }}
        >{dataCapsule.desc3}</div>
      </div>
      <div className="info-box"
        style={{
          width: '3.2em',
          display: 'flex',
          alignItems: 'flex-start',
          paddingLeft: '10px',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
        <div className="info-field"
          style={{
            fontSize: '1.8em',
            marginBottom: '-1vh'
          }}
        ><BiHash
          style={{
            cursor: 'pointer'
          }}
          onClick={()=>barToolFunc('nums')}
        /></div>
        <div className="info-field"
          style={{
            fontSize: '1.8em',
            marginBottom: '-1vh'
          }}
        ><TbRubberStamp
        style={{
          cursor: 'pointer'
        }}
        onClick={()=>barToolFunc('stamps')}
        /></div>

        <div className="info-field"
          style={{
            fontSize: '1.8em',
            marginBottom: '-1vh'
          }}
        ><MdOutlineEmojiFlags
          style={{
            cursor: 'pointer'
          }}
          onClick={()=>territoryToolFunc('colors')}
        /></div>

      </div>
      
      
    </div>
  )
}
export default SideBar