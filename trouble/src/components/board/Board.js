import React from 'react'
import Position from '../position/position'


const Board = () => {
  return (
    <div>
      <h1>
        Board
      </h1>  
      <div>
        <Position position={1}/>
        <Position position={2}/>
        <Position position={3}/>
        <Position position={4}/>
        <Position position={5}/>
        <Position position={6}/>
        <Position position={7}/>
        <Position position={8}/>
        <Position position={9}/>
        <Position position={10}/>
      </div>
    </div>
  )
}

export default Board