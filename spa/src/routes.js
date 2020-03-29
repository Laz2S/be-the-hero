import React from 'react'

// pacote gerenciamento de rotas
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// importar module Logon
import Logon from './pages/Logon'

// importar module Register
import Register from './pages/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}