import {useState, useEffect, useRef} from 'react'
import ImageBox from './ImageBox'
import GridBox from './GridBox'
import CanvasComponent from './CanvasComponent'
import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'


const PanFrame = ({territoryType, tileType, setChosenIndexNum, tileData, chosenTool}) => {

const [imgSize, setImgSize] = useState([0,0])
const backgroundImageRef = useRef()
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
  <TransformWrapper
      initialScale={0.8}
      initialPositionX={-300}
      initialPositionY={-400}
      limitToBounds={false}
      minScale={.5}
      doubleClick={{
        disabled: true,
      }}
      disabled={true}
    >
    <TransformComponent >
      
      <div className='drag-contents'>
        {/* <GridBox territoryType={territoryType} tileType={tileType} setChosenIndexNum={setChosenIndexNum} imgSize={imgSize} tileData={tileData} funcToggle={true} /> */}
        
        <ImageBox grab={false} backgroundImageRef={backgroundImageRef} updateImgSize={updateImgSize} />
        <CanvasComponent imgSize={imgSize} />
      </div>

    </TransformComponent>
    </TransformWrapper>
  )
}

  
}

export default PanFrame
