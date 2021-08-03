import React, { useState } from 'react';
import { SketchPicker } from 'react-color'

const AddPlayer = (props) => {
  const [playername, setPlayerName] = useState("")
  const { playerAdded } = props
  console.log(playername)

  const returnedColor = (color) => {
    console.log(color)
  }
  
  return (
    <div>
      AddPlayer
      <form>
        <label>
          Player Name:
          <input type = "text" name="playername" value={playername} onChange={event => setPlayerName(event.target.value)} />
          <SketchPicker
            onChangeComplete={returnedColor}
          />
          <input type="submit" value="Add" />
        </label>
      </form>
      {/* <div>
        <button onClick={playerAdded}>Complete</button>
      </div>       */}
    </div>
  )
}

export default AddPlayer