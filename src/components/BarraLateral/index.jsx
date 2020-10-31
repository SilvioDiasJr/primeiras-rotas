import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const BarraLateral = (props) => {

  const botaoStack = {
    backgroundColor: props.color || '#54FF9F'
  }

  return (
    <div className="barraLateral">
      <h1>{props.titulo}</h1>
      <div className="botoes">
        <Link to="/">
          <button className="botaoHome">Home</button>
        </Link>
        <Link to={props.path}>
          <button style={botaoStack}>{props.stack}</button>
        </Link>
      </div>
    </div>
  )
}

export default BarraLateral