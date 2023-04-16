import { useEffect, useRef, useState } from "react";
import {GiSwordWound, GiShield, GiAnglerFish, GiAncientSword, GiBigWave, GiBladeBite, GiBoltShield, GiCampfire, GiChessRook} from 'react-icons/gi'
import {GiClick} from 'react-icons/gi'
import {BiHash, BiColor} from 'react-icons/bi'
import {MdHideSource, MdOutlineEmojiFlags} from 'react-icons/md'
import {TbRubberStamp, TbHelpHexagon} from 'react-icons/tb'
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
      factionProper: '',
      factionColor: '',
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
      factionProper: '',
      factionColor: '',
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
        setupDataObj.iconDesc = "This area is suffering from extreme storms."
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

    if(tileData[chosenIndexNum][4] == 'TRUE') {
      setupDataObj.selectable = true
      setupDataObj.title = tileData[chosenIndexNum][3]
      setupDataObj.desc1 = tileData[chosenIndexNum][5]
      setupDataObj.desc2 = tileData[chosenIndexNum][6]
      setupDataObj.desc3 = tileData[chosenIndexNum][7]
    } else {
      setupDataObj.selectable = false
      setupDataObj.title = "Unknown"
      setupDataObj.desc1 = "Party must visit, learn about, or conquer this tile to unlock its information."
      setupDataObj.desc2 = "Additional information about a tile can be gained by purposefully spying, investigating, or exploring."
      setupDataObj.desc3 = ""
    }
    setupDataObj.alliance = tileData[chosenIndexNum][1]
    setupDataObj.playersCanSee = tileData[chosenIndexNum][4]

    switch(tileData[chosenIndexNum][1]) {
      case 'rowansport': {
        setupDataObj.factionColor = 'rgba(255, 215, 0, 0.5)'
        setupDataObj.factionProper = 'Rowansport'
      } break;
      case 'eldritch': {
        setupDataObj.factionColor = 'rgba(128, 0, 128, 0.5)'
        setupDataObj.factionProper = 'Eldirtch Oblivion'
      } break;
      case 'demons': {
        setupDataObj.factionColor = 'rgba(0, 0, 0, 0.5)'
        setupDataObj.factionProper = 'Demon Pact'
      } break;
      case 'pilrith': {
        setupDataObj.factionColor = 'rgba(255, 192, 203, 0.5)'
        setupDataObj.factionProper = 'Pilrith'
      } break;
      case 'lords': {
        setupDataObj.factionColor = 'rgba(255, 0, 0, 0.5)'
        setupDataObj.factionProper = "Lord's Alliance"
      } break;
      case 'volsung': {
        setupDataObj.factionColor = 'rgba(0, 128, 0, 0.5)'
        setupDataObj.factionProper = 'Volsung Vikings'
      } break;
      case 'riverlands': {
        setupDataObj.factionColor = 'rgba(0, 255, 255, 0.5)'
        setupDataObj.factionProper = 'Riverlands Union'
      } break;
      default: {
        setupDataObj.factionColor = ''
        setupDataObj.factionProper = "Unclaimed"
      }
    }



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
    if (val == "colors") {
      setTerritoryType(prevType => prevType === 'colors' ? 'empty' : 'colors');
    } else if (val == 'visibility') {
      setTerritoryType(prevType => prevType === 'visibility' ? 'empty' : 'visibility');
    }
      
  }

  return(
    <div className="side-bar">
      <div className="info-box"
        style={{
          width: '8em',
          backgroundColor: `${dataCapsule.factionColor}`,
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
        <div className="info-field"
          style={{
            fontSize: '.9em',
          }}>
          {dataCapsule.factionProper}
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
          width: '5em',
          display: 'flex',
          alignItems: 'flex-start',
          paddingLeft: '10px',
          flexDirection: 'row',
          flexWrap: 'wrap',
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

        <div className="info-field"
          style={{
            fontSize: '1.8em',
            marginBottom: '-1vh'
          }}
        ><TbHelpHexagon
          style={{
            cursor: 'pointer'
          }}
          onClick={()=>territoryToolFunc('visibility')}
        /></div>

      </div>
      
      
    </div>
  )
}
export default SideBar