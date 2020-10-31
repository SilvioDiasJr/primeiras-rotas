import React from 'react'

import BarraLateral from '../../components/BarraLateral'

import './style.css'

const PaginaBackEnd = () => {
  return (
    <div className="content">
      <BarraLateral
        titulo="Node.js"
        stack="Front-end"
        color="#00BFFF"
        path="/front-end"
      />
      <p>
        Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos contruir
        aplicações web em geral, desde web sites até APIs e micro-serviços.
      </p>
    </div>
  )
}

export default PaginaBackEnd