import React from 'react'

// Dependencias
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Componentes
import Entidad from 'pages/entidad'

// Context
import { AppContextProvider } from 'context/AppContext'
import DatosContrato from 'pages/oficinasPersonaFisica/datosContrato'
import DireccionArrendatario from 'pages/oficinasPersonaFisica/direccionArrendatario'
import DireccionCorrespondencia from 'pages/oficinasPersonaFisica/direccionCorrespondencia'
import OtrosDatosContacto from 'pages/oficinasPersonaFisica/otrosDatosContacto'
import Documentacion from 'pages/oficinasPersonaFisica/documentacion'

function App() {
    return (
        <AppContextProvider>
            <Router basename={'nynExtranet'} >
                <Switch>
                    <Route exact path='/' component={Entidad} />
                    <Route
                        exact
                        path='/oficinas-pf/datos-contrato'
                        component={DatosContrato}
                    />
                    <Route
                        exact
                        path='/oficinas-pf/direccion-arrendatario'
                        component={DireccionArrendatario}
                    />
                    <Route
                        exact
                        path='/oficinas-pf/direccion-correspondencia'
                        component={DireccionCorrespondencia}
                    />
                    <Route
                        exact
                        path='/oficinas-pf/otros-contacto'
                        component={OtrosDatosContacto}
                    />
                    <Route
                        exact
                        path='/oficinas-pf/documentacion'
                        component={Documentacion}
                    />
                </Switch>
            </Router>
        </AppContextProvider>
    )
}

export default App
