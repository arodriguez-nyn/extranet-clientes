import Cabecera from 'componentes/Cabecera'
import React from 'react'

import './styles.css'

const Layout = ({ children }) => {
    return (
        <>
            <Cabecera />
            <main>{children}</main>
        </>
    )
}

export default Layout
