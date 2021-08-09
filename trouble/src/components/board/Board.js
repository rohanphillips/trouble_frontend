import React from 'react'
import { connect } from 'react-redux'
import Position from '../position/Position'
import styles from './Board.module.css'
import {createLayerStyle} from '../helpers/board/helpers'
import DieHolder from '../dice/DieHolder'
import Message from '../message/Message'

const Board = (props) => {
  const { height, width, boardReducer, homeReducer } = props.settings
  const { diceMessageActive, diceMessage } = props
  return (
    <div>
      <h1>
        Board
      </h1>
      <div className={styles.start_layer} style={createLayerStyle("start_layer", height, width, boardReducer, homeReducer)}> 
        <Position position={29}/>
        <Position position={30}/>
        <Position position={31}/>
        <Position position={32}/>
        <Position position={33}/>
        <Position position={34}/>
        <Position position={35}/>
        <Position position={36}/>
        <Position position={37}/>
        <Position position={38}/>
        <Position position={39}/>
        <Position position={40}/>
        <Position position={41}/>
        <Position position={42}/>
        <Position position={43}/>
        <Position position={44}/>  
        <div className={styles.popper_layer} style={createLayerStyle("popper_layer", height, width, boardReducer, homeReducer)}>
          <DieHolder/> 
          { diceMessageActive && <Message message={diceMessage}/>}
        </div>
            
        <div className={styles.board_layer} style={createLayerStyle("board_layer", height, width, boardReducer, homeReducer)}>
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
          <div className={styles.home_layer} style={createLayerStyle("home_layer", height, width, boardReducer, homeReducer)}>
            <Position position={45}/>
            <Position position={46}/>
            <Position position={47}/>
            <Position position={48}/>
            <Position position={49}/>
            <Position position={50}/>
            <Position position={51}/>
            <Position position={52}/>
            <Position position={53}/>
            <Position position={54}/>
            <Position position={55}/>
            <Position position={56}/>
            <Position position={57}/>
            <Position position={58}/>
            <Position position={59}/>
            <Position position={60}/>
          </div>
        </div>        
      </div>  
    </div>
  )
}

export default connect( state => {
  return {
    settings: state.settingsState,
    diceMessageActive: state.boardState.messages.diceMessage.active,
    diceMessage: state.boardState.messages.diceMessage.message
  }
}
)(Board)