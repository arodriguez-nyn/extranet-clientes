import React, { useContext } from 'react'

// Context
import AppContext from 'context/AppContext'

// Dependencias
import styled from 'styled-components'

const FilaDocumento = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 0.125rem 0.25rem;
    border: 1px solid #c2c2c2;

    span {
        font-size: 1.2rem;
        font-weight: bold;
    }

    span:hover {
        cursor: pointer;
    }
`

const DocumentoAdjunto = ({ fichero, seccion }) => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const appContext = useContext(AppContext)
    const { oficinasPF, setOficinasPF } = appContext
    const { dni, nominas, certificadoBancario } = oficinasPF
    
    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleDelete = () => {
        switch (seccion) {
            case 'dni':
                setOficinasPF({
                    ...oficinasPF,
                    dni: dni.filter(ficheroDNI => ficheroDNI.name !== fichero),
                })
                break
            case 'nominas':
                setOficinasPF({
                    ...oficinasPF,
                    nominas: nominas.filter(ficheroNominas => ficheroNominas.name !== fichero),
                })
                break
            case 'certificadoBancario':
                setOficinasPF({
                    ...oficinasPF,
                    certificadoBancario: certificadoBancario.filter(ficheroCertificado => ficheroCertificado.name !== fichero),
                })
                break
            default:
                break
        }
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <FilaDocumento>
            {fichero} <span onClick={handleDelete}>&times;</span>
        </FilaDocumento>
    )
}

export default DocumentoAdjunto
