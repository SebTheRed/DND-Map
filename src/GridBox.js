import { useState } from "react";
import TilePiece from "./TilePiece";

const GridBox = ({ tileData, imgSize, funcToggle }) => {
  const [selectedTile, setSelectedTile] = useState();

  const updateSelectedTile = (index) => {
    console.log(index)
    if (selectedTile === index) {
      setSelectedTile();
    } else {
      setSelectedTile(index);
    }
  };

  return (
    <div style={{ width: imgSize[0], height: imgSize[1] }} className="grid-box">
      {tileData.map((tile, index) => (
        <TilePiece
          key={index}
          tileData={tile}
          isActive={selectedTile === index}
          funcToggle={funcToggle}
          onDoubleClick={() => updateSelectedTile(index)}
        />
      ))}
    </div>
  );
};

export default GridBox;