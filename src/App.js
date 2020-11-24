import React from 'react'

// Dependencias
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Componentes
import Entidad from 'pages/entidad'

// Context
import { AppContextProvider } from 'context/AppContext'
import DatosContrato from 'pages/datosContrato'
import DireccionArrendatario from 'pages/direccionArrendatario'
import DireccionCorrespondencia from 'pages/direccionCorrespondencia'
import OtrosDatosContacto from 'pages/otrosDatosContacto'
import Documentacion from 'pages/documentacion'

function App() {
    return (
        <AppContextProvider>
            <Router basename={'nynExtranet'} >
                <Switch>
                    <Route exact path='/' component={Entidad} />
                    <Route
                        exact
                        path='/datos-contrato'
                        component={DatosContrato}
                    />
                    <Route
                        exact
                        path='/direccion-arrendatario'
                        component={DireccionArrendatario}
                    />
                    <Route
                        exact
                        path='/direccion-correspondencia'
                        component={DireccionCorrespondencia}
                    />
                    <Route
                        exact
                        path='/otros-contacto'
                        component={OtrosDatosContacto}
                    />
                    <Route
                        exact
                        path='/documentacion'
                        component={Documentacion}
                    />
                </Switch>
            </Router>
        </AppContextProvider>
    )
}

export default App
