import React from 'react'

// pacote gerenciamento de rotas
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// importar module Logon
import Logon from './pages/Logon'

// importar module Register
import Register from './pages/Register'

// importar module Profile
import Profile from './pages/Profile'

// importar module NewIncident
import NewIncident from './pages/NewIncident'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}