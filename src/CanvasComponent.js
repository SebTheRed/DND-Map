import {useEffect, useState, useRef} from 'react'
import {initializeApp} from "firebase/app"
import {getFirestore, addDoc, collection, onSnapshot} from "firebase/firestore"

const CanvasComponent =({chosenColor, chosenSize, imgSize, paintScale})=>{
  const canvasRef = useRef()
  const contextRef = useRef()
  const strokesRef = useRef({
    color: '#000000',
    size: 1,
    lines: []
  })
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState()
  const [dpi, setDpi] = useState(window.devicePixelRatio)
  const fireBaseCreds = {
    apiKey: "AIzaSyARFSBf48RxnNhBWxtQZbCGEhlLm9yfvCk",
    authDomain: "suncrest-isles.firebaseapp.com",
    projectId: "suncrest-isles",
    storageBucket: "suncrest-isles.appspot.com",
    messagingSenderId: "419094285469",
    appId: "1:419094285469:web:c36a75a5c8e616de9ed874",
    measurementId: "G-1Q0D0DLCHD"
  }
  const FBApp = initializeApp(fireBaseCreds)
  const dataBase = getFirestore(FBApp)

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d')
    console.log(imgSize)
    canvasRef.current.style.width = `${imgSize[0]}px`;
    canvasRef.current.style.height = `${imgSize[1]}px`
    canvasRef.current.width = imgSize[0] * dpi;
    canvasRef.current.height = imgSize[1] * dpi;

    const unsubscribe = onSnapshot(collection(dataBase, "lines"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const polyLine = doc.data();
        contextRef.current.strokeStyle = polyLine.color;
        contextRef.current.lineWidth = polyLine.size;
        if ('lines' in polyLine) {
          polyLine.lines.forEach(line => {
            contextRef.current.beginPath();
            contextRef.current.moveTo(line.start.x * canvasRef.current.width, line.start.y * canvasRef.current.height);
            contextRef.current.lineTo(line.end.x * canvasRef.current.width, line.end.y * canvasRef.current.height);
            contextRef.current.stroke();
            contextRef.current.closePath();
          })
        }
      });
    });
    return () => unsubscribe();
  }, [])

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(dataBase, "lines"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const polyLine = change.doc.data();
              console.log(polyLine)
              contextRef.current.strokeStyle = polyLine.color;
              contextRef.current.lineWidth = polyLine.size;
              if ('lines' in polyLine) {
                polyLine.lines.forEach(line => {
                  contextRef.current.beginPath();
                  contextRef.current.moveTo(line.start.x * canvasRef.current.width, line.start.y * canvasRef.current.height);
                  contextRef.current.lineTo(line.end.x * canvasRef.current.width, line.end.y * canvasRef.current.height);
                  contextRef.current.stroke();
                  contextRef.current.closePath();
                })
              }
            }
          });
        });
      
        // Clean up the listener when the component unmounts
        return () => unsubscribe();
  }, [dataBase, contextRef]);

  // function getMousePos(evt) {
  //   let rect = canvasRef.current.getBoundingClientRect();
  //   return {
  //       x: ((evt.clientX - rect.left)/paintScale)*dpi,
  //       y: ((evt.clientY - rect.top)/paintScale)*dpi
  //   };
  // }
  const getNormalizedMousePos = (e) => {
    let rect = canvasRef.current.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    }
  }
  const startDrawing = (e) => {
    setIsDrawing(true)
    setLastPos(getNormalizedMousePos(e))
    console.log(getNormalizedMousePos(e))
    contextRef.current.strokeStyle = chosenColor
    contextRef.current.lineWidth = chosenSize
  }
  const drawFunc = (e) => {
    if (isDrawing == false) return;
    contextRef.current.beginPath()
    let convertedCoords = {
      cX: lastPos.x * canvasRef.current.width,
      cY: lastPos.y * canvasRef.current.height
    }
    contextRef.current.moveTo(convertedCoords.cX, convertedCoords.cY)
    let currentPos = getNormalizedMousePos(e)
    let endCoords = {
      eX: currentPos.x * canvasRef.current.width,
      eY: currentPos.y * canvasRef.current.height
    }
    contextRef.current.lineTo(endCoords.eX, endCoords.eY)
    contextRef.current.stroke()
    contextRef.current.closePath()
    strokesRef.current.lines.push({
      start: {x: lastPos.x, y: lastPos.y},
      end: {x: getNormalizedMousePos(e).x, y: getNormalizedMousePos(e).y}
    })
    strokesRef.current.color = chosenColor
    strokesRef.current.size = chosenSize
    console.log(strokesRef.current.lines)
    setLastPos(getNormalizedMousePos(e))
    // contextRef.current.beginPath()
    // contextRef.current.moveTo(lastPos.x, lastPos.y)
    // let currentCoords = getMousePos(e)
    // contextRef.current.lineTo(currentCoords.x, currentCoords.y)
    // contextRef.current.stroke()
    // contextRef.current.closePath()
    // strokesRef.current.lines.push({
    //   start: {x: lastPos.x, y: lastPos.y},
    //   end: {x: currentCoords.x, y: currentCoords.y}
    // })
    // setLastPos(getMousePos(e))
  }
  const endDraw = async() => {
    setIsDrawing(false)
    if (strokesRef.current.lines.length > 0) {
      console.log(strokesRef.current)
      try {
        await addDoc(collection(dataBase, "lines"), strokesRef.current);
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }
    
  }

  return(
    <canvas
    className='canvasElement'
    ref={canvasRef}
    onMouseDown={startDrawing}
    onMouseMove={drawFunc}
    onMouseUp={endDraw}
    onMouseLeave={endDraw}
    ></canvas>
  )
}


export default CanvasComponent