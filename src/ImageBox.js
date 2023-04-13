import { useState, useEffect } from "react"
import map from './map.jpg'

const ImageBox = ({backgroundImageRef, updateImgSize}) => {

  const onImageLoad = () => {
    updateImgSize()
  }


  return(
    <div className="image-box">
      <img 
      ref={backgroundImageRef}
      className="image-image" 
      src={map}
      onLoad={onImageLoad}
      ></img>
    </div>
  )
}

export default ImageBox