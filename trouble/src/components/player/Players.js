import React from 'react';
import { connect } from 'react-redux'
import Player from './Player'

const Players = (props) => {
  const { players } = props
  return (
    <div>
      Players List
      {
        players.map((p, i) => (
          <React.Fragment key={i}>
            <Player player={p} playerID={i}/>
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default connect( state => {
  return {
    players: state.boardState.players
  }
}) (Players)