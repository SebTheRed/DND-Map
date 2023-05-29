import {useState, useEffect, useRef} from 'react'
import ImageBox from './ImageBox'
import GridBox from './GridBox'
import CanvasComponent from './CanvasComponent'
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'


const PanFrame = ({territoryType, tileType, setChosenIndexNum, tileData, chosenTool}) => {

const [imgSize, setImgSize] = useState([0,0])
const [paintScale, setPaintScale] = useState(0.5)
const [chosenColor, setChosenColor] = useState('black')
const [chosenSize, setChosenSize] = useState(1)
const backgroundImageRef = useRef()

const colorChange = (v) => {
  setChosenColor(v)
  console.log(v)
}
const sizeChange = (v) => {
  setChosenSize(v)
  console.log(v)
}

const updateImgSize = () => {
    let backWidth = backgroundImageRef.current.width
    let backHeight = backgroundImageRef.current.height
    console.log(backWidth, backHeight)
    setImgSize([backWidth, backHeight])
}

  const handleDoubleClick = (event) => {
    event.preventDefault();
  };

if (chosenTool == 'pan') {
  return(
    <TransformWrapper
      initialScale={0.8}
      initialPositionX={-300}
      initialPositionY={-400}
      limitToBounds={false}
      minScale={.5}
      
    >
    <TransformComponent >
      
      <div className='drag-contents'>
        {/* <GridBox imgSize={imgSize} tileData={tileData} /> */}
        <ImageBox grab={true} backgroundImageRef={backgroundImageRef} updateImgSize={updateImgSize} />
      </div>

    </TransformComponent>
    </TransformWrapper>

)
} else if (chosenTool == 'flag') {
  return(
  <TransformWrapper
      initialScale={0.8}
      initialPositionX={-300}
      initialPositionY={-400}
      limitToBounds={false}
      minScale={.5}
      doubleClick={{
        disabled: true,
      }}
    >
    <TransformComponent >
      
      <div className='drag-contents'>
        <GridBox territoryType={territoryType} tileType={tileType} setChosenIndexNum={setChosenIndexNum} imgSize={imgSize} tileData={tileData} funcToggle={true} />
        <ImageBox grab={false} backgroundImageRef={backgroundImageRef} updateImgSize={updateImgSize} />
      </div>

    </TransformComponent>
    </TransformWrapper>
  )
} else if (chosenTool == 'paint') {
  return(
    <div>
      <div className='drag-contents' style={{userSelect: 'none',cursor: 'crosshair', scale: '1', transform: `scale(${paintScale})`, transformOrigin: 'top left'}}>
        {/* <GridBox territoryType={territoryType} tileType={tileType} setChosenIndexNum={setChosenIndexNum} imgSize={imgSize} tileData={tileData} funcToggle={true} /> */}
        <ImageBox grab={false} backgroundImageRef={backgroundImageRef} updateImgSize={updateImgSize} />
        <CanvasComponent chosenColor={chosenColor} chosenSize={chosenSize} paintScale={paintScale} imgSize={imgSize}/>
      </div>
      <div className='paletteBar' style={{color: 'white'}}>
        <div className='paletteContainer'>
          <div style={{fontWeight: 'bold'}}>Color:</div>
          <div className='paletteChoice'>
            <div onClick={()=>colorChange('#FF2D00')} style={{backgroundColor: '#FF2D00'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#FF7100')} style={{backgroundColor: '#FF7100'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#FFD600')} style={{backgroundColor: '#FFD600'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#00FF62')} style={{backgroundColor: '#00FF62'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#00FFD9')} style={{backgroundColor: '#00FFD9'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#0056FF')} style={{backgroundColor: '#0056FF'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#7C00FF')} style={{backgroundColor: '#7C00FF'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#D600FF')} style={{backgroundColor: '#D600FF'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#000000')} style={{backgroundColor: '#000000'}} className='paletteColor'></div>
            <div onClick={()=>colorChange('#FFFFFF')} style={{backgroundColor: '#FFFFFF'}} className='paletteColor'></div>
          </div>
        </div>
        <div className='paletteContainer'>
          <div style={{fontWeight: 'bold'}}>Size:</div>
          <div className='paletteChoice'>
            <div onClick={()=>setChosenSize(1)} className='paletteSize'>1</div>
            <div onClick={()=>setChosenSize(2)} className='paletteSize'>2</div>
            <div onClick={()=>setChosenSize(3)} className='paletteSize'>3</div>
            <div onClick={()=>setChosenSize(4)} className='paletteSize'>4</div>
            <div onClick={()=>setChosenSize(5)} className='paletteSize'>5</div>
            <div onClick={()=>setChosenSize(6)} className='paletteSize'>6</div>
            <div onClick={()=>setChosenSize(7)} className='paletteSize'>7</div>
            <div onClick={()=>setChosenSize(8)} className='paletteSize'>8</div>
            <div onClick={()=>setChosenSize(9)} className='paletteSize'>9</div>
            <div onClick={()=>setChosenSize(10)} className='paletteSize'>10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

  
}

export default PanFrame
