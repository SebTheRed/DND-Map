import {useEffect, useState, useRef} from 'react'

const CanvasComponent =(imgSize)=>{
  const canvasRef = useRef()
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState()

  useEffect(() => {
    const canvasContext = canvasRef.current.getContext('2d')
    console.log(imgSize.imgSize)
  }, [])

  function getMousePos(canvas, evt) {
    var rect = canvasRef.current.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
  }
  const startDrawing = (e) => {
    setIsDrawing(true)
    setLastPos(getMousePos(canvasRef, e))
    console.log(getMousePos(canvasRef, e))
  }

  return(
    <canvas
    className='canvasElement'
    style={{height: (imgSize.imgSize[1] -10), width: (imgSize.imgSize[0] -10), border: '10px solid black'}}
    ref={canvasRef}
    onClick={startDrawing}
    ></canvas>
  )
}


export default CanvasComponent