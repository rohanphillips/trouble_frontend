import ReactDice from 'react-dice-complete'
import React, { useRef } from 'react';
import 'react-dice-complete/dist/react-dice-complete.css'

const DieHolder = () => {
  const diceRef = useRef()
  const rollAll = () => {
    diceRef.current.rollAll()
  }

  const rollDoneCallback = (num) => {
    console.log(`You rolled a ${num}`)
  }

  console.log("dieholder", )
  return (
    <div onClick={rollAll}>
      <ReactDice 
        numDice={1}
        dieSize={150}
        defaultRoll={2}
        rollDone={rollDoneCallback}
        ref={diceRef}
      />
    </div>
  )
}

export default DieHolder