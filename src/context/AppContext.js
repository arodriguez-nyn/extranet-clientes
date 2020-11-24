import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
    const [oficinasPF, setOficinasPF] = useState({
        entidad: 0,
        tipoEntidad: 'Despachos',
        tipoFiscal: 'Persona Física',
        tratamiento: 'Sr.',
        nombre: '',
        apellidos: '',
        tipoDocumento: 'DNI',
        documento: '',
        tipoViaArrendatario: '',
        direccionArrendatarioContrato: false,
        direccionArrendatario: '',
        numeroArrendatario: '',
        bloqueArrendatario: '',
        escaleraArrendatario: '',
        pisoArrendatario: '',
        puertaArrendatario: '',
        codigoPostalArrendatario: '',
        localidadArrendatario: '',
        provinciaArrendatario: '',
        paisArrendatario: '',
        telefonoArrendatario: '',
        emailArrendatario: '',
        tipoViaCorrespondencia: '',
        direccionCorrespondenciaContrato: false,
        direccionCorrespondencia: '',
        numeroCorrespondencia: '',
        bloqueCorrespondencia: '',
        escaleraCorrespondencia: '',
        pisoCorrespondencia: '',
        puertaCorrespondencia: '',
        codigoPostalCorrespondencia: '',
        localidadCorrespondencia: '',
        provinciaCorrespondencia: '',
        paisCorrespondencia: '',
        telefonoCorrespondencia: '',
        emailCorrespondencia: '',
        tipoContacto1: '',
        contacto1: '',
        telefono1: '',
        email1: '',
        tipoContacto2: '',
        contacto2: '',
        telefono2: '',
        email2: '',
        tipoContacto3: '',
        contacto3: '',
        telefono3: '',
        email3: '',
        dni: [],
        nominas: [],
        certificadoBancario: [],
    })

    return (
        <AppContext.Provider
            value={{
                oficinasPF,
                setOficinasPF,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
