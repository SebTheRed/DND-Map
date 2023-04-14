import { useState } from "react";
import TilePiece from "./TilePiece";

const GridBox = ({territoryType, tileType, setChosenIndexNum, tileData, imgSize, funcToggle }) => {
  const [selectedTile, setSelectedTile] = useState();

  const updateSelectedTile = (index) => {
    console.log(index)
    if (selectedTile === index) {
      setChosenIndexNum('')
      setSelectedTile();
    } else {
      setChosenIndexNum(index)
      setSelectedTile(index);
    }
  };

  const TestTile = () => {
    return(
      <div className="hex">
        
      </div>
    )
  }

  return (
    <div style={{ width: imgSize[0], height: imgSize[1] }} className="grid-box">
      {tileData.map((tile, index) => (
        // <TestTile key={Math.random()} />
        <TilePiece
          index={index}
          tileType={tileType}
          key={index}
          tileData={tile}
          isActive={selectedTile === index}
          funcToggle={funcToggle}
          onDoubleClick={() => updateSelectedTile(index)}
          territoryType={territoryType}
        />
      ))}
    </div>
  );
};

export default GridBox;