import React, { useContext, useState } from 'react'

// Dependencias
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import shortid from 'shortid'

// Context
import AppContext from 'context/AppContext'

// Servicios
import {altaRegistro} from 'servicios/extranet'

// Componentes
import Cabecera from 'componentes/Cabecera'
import Layout from 'componentes/Layout'
import { Formulario } from 'componentes/ui/Formulario'
import DocumentoAdjunto from 'componentes/DocumentoAdjunto'
import { Titulo } from 'componentes/ui/Titulo'
import { Boton } from 'componentes/ui/Boton'

const InputFile = styled.div`
    background-color: #fff;
    color: var(--primary-yellow);
    border: 1px solid var(--primary-yellow);
    padding: 0.35rem 0.65rem;
    border-radius: 3px;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    text-align: center;
    width: 150px;
    margin:0 auto;
    margin-bottom: 1rem;
    margin-top: 0.5rem;

    label {
        display: block;        
    }

    label:hover {
        cursor: pointer;
    }

    input {
        display: none;
    }

    @media (max-width: 412px) {        
        width: 100%;
    }
`

const Etiqueta = styled.label`
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 1rem;

`

const ListaFicheros = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.25rem;
`

const Documentacion = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { oficinasPF, setOficinasPF } = appContext
    const { dni, nominas, certificadoBancario } = oficinasPF
    const [ficheroDNI, setFicheroDNI] = useState('')
    const [ficheroNominas, setFicheroNominas] = useState('')
    const [ficheroCertificado, setFicheroCertificado] = useState('')

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleRetroceder = () => {
        history.push('/oficinas-pf/otros-contacto')
    }

    const handleChangeDNI = e => {
        setOficinasPF({
            ...oficinasPF,
            dni: [...dni, e.target.files[0]],
        })
    }

    const resetDNI = e => {
        setFicheroDNI('')
    }

    const handleChangeNominas = e => {
        setOficinasPF({
            ...oficinasPF,
            nominas: [...nominas, e.target.files[0]],
        })
    }

    const resetNominas = e => {
        setFicheroNominas('')
    }

    const handleChangeCertificado = e => {
        setOficinasPF({
            ...oficinasPF,
            certificadoBancario: [...certificadoBancario, e.target.files[0]],
        })
    }

    const resetCertificado = e => {
        setFicheroCertificado('')
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()

        dni.forEach(documento => {
            formData.append('archivos', documento)
        })
        nominas.forEach(documento => {
            formData.append('archivos', documento)
        })
        certificadoBancario.forEach(documento => {
            formData.append('archivos', documento)
        })

        //const {entidad, documento} = oficinasPF
        altaRegistroFormulario(formData)

        //await guardaArchivos(formData, entidad, documento)
        //await altaRegistroFormulario()    
    }

    const altaRegistroFormulario = async formData => {
        const { entidad, 
                tipoFiscal, 
                tratamiento,
                nombre,
                apellidos,
                tipoDocumento,
                documento,
                tipoViaArrendatario,
                direccionArrendatario,
                numeroArrendatario,
                bloqueArrendatario,
                escaleraArrendatario,
                pisoArrendatario,
                puertaArrendatario,
                codigoPostalArrendatario,
                localidadArrendatario,
                provinciaArrendatario,
                paisArrendatario,
                telefonoArrendatario,
                emailArrendatario,
                tipoViaCorrespondencia,
                direccionCorrespondencia,
                numeroCorrespondencia,
                bloqueCorrespondencia,
                escaleraCorrespondencia,
                pisoCorrespondencia,
                puertaCorrespondencia,
                codigoPostalCorrespondencia,
                localidadCorrespondencia,
                provinciaCorrespondencia,
                paisCorrespondencia,
                telefonoCorrespondencia,
                emailCorrespondencia } = oficinasPF

        const codigoTipoFiscal = tipoFiscal && 
            (tipoFiscal === 'Persona Física' ? 'F' : 'J')                

        const dsExtcli = {
            'prods:hasChanges': true,
            'ttEXTCLI': [{
                "prods:clientId": "null",
                "prods:rowState": "created",
                "CODENT": parseInt(entidad),
                "NUMLIN": 1,
                "TIPENT": "D",
                "TIPFIS": codigoTipoFiscal,
                "TRACLI": tratamiento,
                "NOMCLI": nombre,
                "NOMAPE": apellidos,
                "TIPDOC": tipoDocumento,
                "CODDOC": documento,
                "TIVIAR": tipoViaArrendatario,
                "DIRARR": direccionArrendatario,
                "NUMARR": numeroArrendatario,
                "BLOARR": bloqueArrendatario,
                "ESCARR": escaleraArrendatario,
                "PISARR": pisoArrendatario,
                "PUEARR": puertaArrendatario,
                "COPOAR": codigoPostalArrendatario,
                "POBARR": localidadArrendatario,
                "PROARR": provinciaArrendatario,
                "PAIARR": paisArrendatario,
                "TELARR": telefonoArrendatario,
                "MAILAR": emailArrendatario,
                "TIVICO": tipoViaCorrespondencia,
                "DIRCOR": direccionCorrespondencia,
                "NUMCOR": numeroCorrespondencia,
                "BLOCOR": bloqueCorrespondencia,
                "ESCCOR": escaleraCorrespondencia,
                "PISCOR": pisoCorrespondencia,
                "PUECOR": puertaCorrespondencia,
                "COPOCO": codigoPostalCorrespondencia,
                "POBCOR": localidadCorrespondencia,
                "PROCOR": provinciaCorrespondencia,
                "PAICOR": paisCorrespondencia,
                "TELCOR": telefonoCorrespondencia,
                "MAICOR": emailCorrespondencia,
                "id": "",
                "seq": null
            }]
        }
        const createExtcli = {
            'dsEXTCLI': dsExtcli
        }
        await altaRegistro(formData, entidad, documento, createExtcli)
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Cabecera />
            <Layout>
                <Formulario onSubmit={handleSubmit}>
                    <Titulo>Adjuntar Documentación</Titulo>
                    <Etiqueta>Documentación (DNI/NIE)</Etiqueta>
                    <InputFile>
                        <label htmlFor='dni'>Añadir...</label>
                        <input 
                            id='dni'
                            type='file'
                            value={ficheroDNI}
                            onClick={resetDNI}
                            onChange={handleChangeDNI}
                        />                        
                    </InputFile>
                    <ListaFicheros>
                        {dni &&
                            dni.length > 0 &&
                            dni.map(fichero => (
                                <DocumentoAdjunto
                                    key={shortid.generate()}
                                    seccion='dni'
                                    fichero={fichero.name}
                                />
                            ))}
                    </ListaFicheros>
                    <Etiqueta>
                        Últimas 3 nóminas o justificante de Ingresos
                    </Etiqueta>
                    <InputFile>
                        <label htmlFor='nominas'>Añadir...</label>
                        <input
                            id='nominas'
                            type='file'
                            value={ficheroNominas}
                            onClick={resetNominas}
                            onChange={handleChangeNominas}
                        />
                    </InputFile>
                    <ListaFicheros>
                        {nominas &&
                            nominas.length > 0 &&
                            nominas.map(fichero => (
                                <DocumentoAdjunto
                                    key={shortid.generate()}
                                    seccion='nominas'
                                    fichero={fichero.name}
                                />
                            ))}
                    </ListaFicheros>
                    <Etiqueta htmlFor='certificado-bancario'>
                        Certificado titularidad bancario
                    </Etiqueta>
                    <InputFile>
                        <label htmlFor='certificado-bancario'>Añadir...</label>
                        <input
                            id='certificado-bancario'
                            type='file'
                            width='100%'
                            value={ficheroCertificado}
                            onClick={resetCertificado}
                            onChange={handleChangeCertificado}
                        />
                    </InputFile>
                    <ListaFicheros>
                        {certificadoBancario &&
                            certificadoBancario.length > 0 &&
                            certificadoBancario.map(fichero => (
                                <DocumentoAdjunto
                                    key={shortid.generate()}
                                    seccion='certificado'
                                    fichero={fichero.name}
                                />
                            ))}
                    </ListaFicheros>
                    <footer>
                        <Boton
                            marginLeft='0.25rem'
                            marginTop='1rem'
                            onClick={handleRetroceder}
                        >
                            &lt;&lt; Anterior
                        </Boton>
                        <Boton
                            type='submit'
                            marginLeft='0.25rem'
                            marginTop='1rem'                            
                        >
                            Finalizar
                        </Boton>
                    </footer>
                </Formulario>
            </Layout>
        </>
    )
}

export default Documentacion
