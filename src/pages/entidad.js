import React, { useContext, useEffect, useState } from 'react'

// Dependencias
//import { useFormik } from 'formik'
//import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

// Context
import AppContext from 'context/AppContext'

// Componentes
import Layout from 'componentes/Layout'
import { Campo, Select } from 'componentes/ui/Campos'
import { Boton } from 'componentes/ui/Boton'
import {
    Formulario,
    //CampoObligatorio,
    LineaFormulario,
} from 'componentes/ui/Formulario'
//import Alerta from 'componentes/Alerta'

const Entidad = ({location}) => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const [datosFormulario, setDatosFormulario] = useState({
        entidad: 0,
        tipoEntidad: '',
        tipoFiscal: 'Persona Física'
    })
    const {entidad, tipoEntidad, tipoFiscal} = datosFormulario
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { oficinasPF, setOficinasPF } = appContext
    
    // const formik = useFormik({
    //     initialValues: {
    //         entidad
    //     },
    //     validationSchema: Yup.object({
    //         entidad: Yup.number()
    //             .required('El código de entidad es obligatorio')
    //             .moreThan(0, 'Introduzca un código de entidad'),
    //     }),
    //     onSubmit: valores => {
    //         const { entidad } = valores
    //         setOficinasPF({
    //             ...oficinasPF,
    //             entidad,
    //         })
    //         history.push('/oficinas-pf/datos-contrato')
    //     },
    // })

    /* ------------------------------------------------------------------- */
    /* ---------------------------- USE EFFECTS -------------------------- */
    /* ------------------------------------------------------------------- */
    useEffect(() => {
        const obtieneParametros = () => {
            const queryParams = location.search 
            const parametros = queryParams.split('&')
            
            const elementoEntidad = parametros[0]
            const parametroEentidad = elementoEntidad.split('=')[1]
            
            const elementoTipo = parametros[1]
            const parametroTipoEntidad = elementoTipo.split('=')[1]
    
            setDatosFormulario({
                ...datosFormulario,
                entidad: parametroEentidad,
                tipoEntidad: parametroTipoEntidad
            })
        }

        location && location.search !== "" && obtieneParametros()
    }, [location, datosFormulario])

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleChange = e => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        setOficinasPF({
            ...oficinasPF,
            entidad,
            tipoEntidad,
            tipoFiscal
        })
        history.push('/oficinas-pf/datos-contrato')
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Layout>
                <Formulario onSubmit={handleSubmit}>
                    <LineaFormulario>
                        <label htmlFor='entidad'>
                            Entidad
                        </label>
                        <Campo
                            type='number'
                            id='entidad'
                            name='entidad'
                            value={entidad}
                            disabled
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='tipo-entidad'>
                            Tipo
                        </label>
                        <Campo
                            type='text'
                            id='tipoEntidad'
                            name='tipoEntidad'
                            value={tipoEntidad}
                            disabled
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='tipo-fiscal'>
                            Física/Jurídica
                        </label>
                        <Select
                            id='tipo-fiscal'
                            name='tipoFiscal'
                            value={tipoFiscal}
                            onChange={handleChange}
                        >
                            <option>Persona Física</option>
                            <option>Persona Jurídica</option>
                        </Select>
                    </LineaFormulario>
                    <footer className='footer-one-button'>
                        <Boton
                            type='submit'
                            marginLeft='0.25rem'
                            marginTop='1rem'
                        >
                            Siguiente &gt;&gt;
                        </Boton>
                    </footer>
                </Formulario>
            </Layout>
        </>
    )
}

export default Entidad
