import React from 'react'
import { connect } from 'react-redux'

const GameController = (props) => {
  const { currentRoll } = props
  return (
    <div>
      Controller {currentRoll}
    </div>
  )
}

export default connect( state => {
  return {
    settings: state.settingsState,
    currentRoll: state.boardState.currentRoll,
  }
})(GameController)