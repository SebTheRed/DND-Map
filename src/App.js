import logo from './logo.svg';
import './App.css';
import ImageBox from './ImageBox';
import GridBox from './GridBox';
import PanFrame from './PanFrame';
import HeaderBar from './HeaderBar';
import SideBar from './SideBar';
import { useEffect, useState, useRef } from 'react';



function App() {



const [baseURL, setBaseURL] = useState('https://sebbelio-server-ojupvy7mfq-uc.a.run.app/')
// const [baseURL, setBaseURL] = useState('http://localhost:1396/')
const [tileType, setTileType] = useState('stamps')
const [territoryType, setTerritoryType] = useState('visibility')
const [tileData, setTileData] = useState([])
const [chosenTool, setChosenTool] = useState("flag")
const [chosenIndexNum, setChosenIndexNum] = useState()
const chosenIndex = useRef('new')



useEffect(()=> {
  const getFunc = async() => {
    let res = fetch(baseURL + 'suncrest/data', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setTileData(data.response[0].data.values))
  }
  getFunc()
}, [])

useEffect(()=>{
  console.log(chosenTool)
},[chosenTool])

const FooterToggle = () => {
  if (chosenTool == 'flag') {
    return ( <SideBar setTerritoryType={setTerritoryType} setTileType={setTileType} chosenIndexNum={chosenIndexNum} tileData={tileData} /> )
  } else {
    return
  }
}
  return (
    <div className='App'>
      <HeaderBar setChosenTool={setChosenTool} />
      <FooterToggle />
      <PanFrame territoryType={territoryType} tileType={tileType} setChosenIndexNum={setChosenIndexNum} chosenTool={chosenTool} tileData={tileData} />
    </div>
  );
  
}

export default App;
