import React from 'react'
import { connect } from 'react-redux'

const GameController = () => {
  return (
    <div>
      Controller
    </div>
  )
}

export default connect( state => {
  return {
    settings: state.settingsState
  }
})(GameController)