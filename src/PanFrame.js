import {useState, useEffect, useRef} from 'react'
import ImageBox from './ImageBox'
import GridBox from './GridBox'
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
}
//  else if (chosenTool == 'grid') {
//   return(
//   <TransformWrapper
//       initialScale={0.8}
//       initialPositionX={-300}
//       initialPositionY={-400}
//       limitToBounds={false}
//       minScale={.5}
//       doubleClickZoom={false}
//     >
//     <TransformComponent >
      
//       <div className='drag-contents'>
//         <GridBox imgSize={imgSize} tileData={tileData} funcToggle={false} />
//         <ImageBox backgroundImageRef={backgroundImageRef} updateImgSize={updateImgSize} />
//       </div>

//     </TransformComponent>
//     </TransformWrapper>
//   )
// }
  
}

export default PanFrame


/*

const dragStartFunc = (e) => {
  console.log('start')
  // var img = new Image();
  //   img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
  //   e.dataTransfer.setDragImage(img, 0, 0);
    dragBoxRef.current.classList.add('dragging')
  prevCoords.current = {
    x: e.clientX,
    y: e.clientY,
  }
}
const dragFunc = (e) => {
  console.log(e.clientX, e.clientY)
  // console.log(dragBoxRef.current.clientHeight)
  const posCoordsCopy = {...posCoords}
  let diffX = e.clientX - prevCoords.current.x
  let diffY = e.clientY - prevCoords.current.y
  let newX = diffX + posCoords.x
  let newY = diffY + posCoords.y
  const widthSize = dragBoxRef.current.clientWidth
  const heightSize = dragBoxRef.current.clientHeight
  if (e.clientX == 0 && e.clientY == 0) {return}
  prevCoords.current = {
    x: e.clientX,
    y: e.clientY,
  }
  setPosCoords({x: newX, y: newY})
}

const dragEndFunc = (e) => {
  // dragBoxRef.current.classList.remove('dragging')
  e.stopPropagation()
  e.preventDefault()
}

*/