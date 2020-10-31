import React from 'react'

import BarraLateral from '../../components/BarraLateral'

import './style.css'

const PaginaFrontEnd = () => {
  return (
    <div className="content">
      <BarraLateral
        titulo="React.js"
        stack="Back-end"
        path="/back-end"
      />
      <p>
        React é uma biblioteca JavaScript para a criação de interfaces de usuários e, nesse contexto, uma das
        tecnologias mais utilizadas pelo mercado.
      </p>
    </div>
  )
}

export default PaginaFrontEnd