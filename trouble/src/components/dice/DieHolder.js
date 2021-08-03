import ReactDice from 'react-dice-complete'
import React, { useRef } from 'react';
import { connect } from 'react-redux'
import 'react-dice-complete/dist/react-dice-complete.css'
import { updateRoll } from '../reducers/board'

const DieHolder = (props) => {
  const diceRef = useRef()
  const { currentRoll, updateRoll } = props

  const rollAll = () => {
    diceRef.current.rollAll()
  }
  
  return (
    <div >
      <ReactDice 
        onClick={rollAll}
        numDice={1}
        dieSize={150}
        defaultRoll={currentRoll}
        rollDone={updateRoll}
        ref={diceRef}
      />
    </div>
  )
}

export default connect( state => {
  return {
    currentRoll: state.boardState.currentRoll
  }
}, {updateRoll}) (DieHolder)