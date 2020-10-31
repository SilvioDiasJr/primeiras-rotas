import React from 'react'
import { Link } from 'react-router-dom'
import BotaoPagina from '../../components/BotaoPagina'

import './style.css'

const PaginaInicial = (props) => {
  return (
    <div className="container">
      <div className="titulo">
        <h1>Escolha abaixo seu caminho em JavaScript</h1>
      </div>

      <div className="cards">
        <Link to='/front-end' className="link">
          <BotaoPagina titulo="Front-end" color="#00BFFF" />
        </Link>

        <Link to='/back-end' className="link">
          <BotaoPagina titulo="Back-end" />
        </Link>
      </div>
    </div>
  )
}

export default PaginaInicial