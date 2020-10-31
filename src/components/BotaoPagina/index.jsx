import React from 'react'

import './style.css'

const BotaoPagina = (props) => {

  const Botao = {
    backgroundColor: props.color || '#54FF9F',
  }

  return (
    <button className="botaoPagina" style={Botao}>
      {props.titulo}
    </button>
  )
}

export default BotaoPagina