import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PaginaBackEnd from '../../pages/PaginaBackEnd'
import PaginaFrontEnd from '../../pages/PaginaFrontEnd'
import PaginaInicial from '../../pages/PaginaInicial'

const Rotas = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PaginaInicial} />
      <Route path='/front-end' component={PaginaFrontEnd} />
      <Route path='/back-end' component={PaginaBackEnd} />
    </Switch>
  </BrowserRouter>
)

export default Rotas