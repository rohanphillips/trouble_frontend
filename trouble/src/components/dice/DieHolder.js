import ReactDice from 'react-dice-complete'
import React, { useRef } from 'react';
import { connect } from 'react-redux'
import 'react-dice-complete/dist/react-dice-complete.css'
import { updateRoll } from '../reducers/board'

const DieHolder = (props) => {
  const diceRef = useRef()
  const { currentRoll, updateRoll, gameInProgress, diceRolled } = props

  return (
    <div >
      <div>
        { gameInProgress &&        
          <ReactDice 
            disableIndividual={!gameInProgress}
            rollTime={1}
            numDice={1}
            dieSize={150}
            defaultRoll={currentRoll}
            rollDone={updateRoll}
            ref={diceRef}
          />
        }
      </div>
      
    </div>
  )
}

export default connect( state => {
  return {
    currentRoll: state.boardState.currentRoll,
    gameInProgress: state.boardState.gameInProgress,
    diceRolled: state.boardState.diceRolled
  }
}, {updateRoll}) (DieHolder)