import React from 'react'
import { connect } from 'react-redux'
import Position from '../position/Position'
import styles from './Board.module.css'
import {createLayerStyle} from '../helpers/helpers'


const Board = (props) => {
  const { height, width, boardReducer } = props.settings
  return (
    <div >
      <h1>
        Board
      </h1>
      <div className={styles.start_layer} style={createLayerStyle("start_layer", height, width, boardReducer)}>
        <div className={styles.board_layer} style={createLayerStyle("board_layer", height, width, boardReducer)}>
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
          <Position position={11}/>
          <Position position={12}/>
          <Position position={13}/>
          <Position position={14}/>
          <Position position={15}/>
          <Position position={16}/>
          <Position position={17}/>
          <Position position={18}/>
          <Position position={19}/>
          <Position position={20}/>
          <Position position={21}/>
          <Position position={22}/>
          <Position position={23}/>
          <Position position={24}/>
          <Position position={25}/>
          <Position position={26}/>
          <Position position={27}/>
          <Position position={28}/>
          <Position position={29}/>
          <Position position={30}/>
          <Position position={31}/>
          <Position position={32}/>
          <div>

          </div>
        </div>
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