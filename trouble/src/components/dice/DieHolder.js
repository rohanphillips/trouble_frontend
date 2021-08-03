import ReactDice from 'react-dice-complete'
import React, { useRef } from 'react';
import { connect } from 'react-redux'
import 'react-dice-complete/dist/react-dice-complete.css'
import { updateRoll } from '../reducers/board'

const DieHolder = (props) => {
  const diceRef = useRef()
  const { currentRoll, updateRoll, inProgress } = props

  return (
    <div >
      <ReactDice 
        disableIndividual={!inProgress}
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
    currentRoll: state.boardState.currentRoll,
    inProgress: state.boardState.inProgress
  }
}, {updateRoll}) (DieHolder)