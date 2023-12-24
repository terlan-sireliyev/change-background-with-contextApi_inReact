import React from 'react'
import { useChangeColor } from '../../context/ColorContext'
import styleColor from '../changeColor.module.css'
const ChangeColorProvider = () => {
  const { colorChange, onlineCheck, state } = useChangeColor()
  return (
    <div  >
      <h1>Default</h1>
      <p className={styleColor.pClas}>
        <span className={styleColor.spanClas}>Power:</span>
        {state.onlineCase === true ? "on" : "off"}
      </p>
      <button className="btn btn-primary" onClick={onlineCheck}>Check Online or not</button>
      <p
        className={styleColor.ChangeBK}
        style={{ background: state.colorCase === true ? 'blue' : "red" }}>
        Change background
      </p>
      <button className="btn btn-info" onClick={colorChange}>Change Background</button>
    </div>
  )
}

export default ChangeColorProvider