import React from 'react'
import { connect } from 'react-redux'
import Position from '../position/Position'
import styles from './Board.module.css'


const Board = (props) => {
  const { height, width } = props.settings
  return (
    <div className={styles.start_layer} style={{width: `${width}px`, height: `${height}px`}}>
      <h1>
        Board
      </h1>  
      <div className={styles.board_layer} style={{width: `${width - 100}px`, height: `${height - 100}px`}}>
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

export default connect( state => {
  return {
    settings: state.settingsState,
  }
}
)(Board)