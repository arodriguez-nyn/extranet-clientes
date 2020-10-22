import React, { useContext } from 'react'

// Dependencias
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

// Context
import AppContext from 'context/AppContext'

// Componentes
import Layout from 'componentes/Layout'
import { Campo, Select } from 'componentes/ui/Campos'
import { Boton } from 'componentes/ui/Boton'
import {
    Formulario,
    CampoObligatorio,
    LineaFormulario,
} from 'componentes/ui/Formulario'
import Cabecera from 'componentes/Cabecera'
import Alerta from 'componentes/Alerta'

const Entidad = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { valoresFormulario, setValoresFormulario } = appContext
    const { entidad, tipoEntidad, tipoFiscal } = valoresFormulario

    const formik = useFormik({
        initialValues: {
            entidad,
            tipoFiscal,
        },
        validationSchema: Yup.object({
            entidad: Yup.number()
                .required('El código de entidad es obligatorio')
                .moreThan(0, 'Introduzca un código de entidad'),
        }),
        onSubmit: valores => {
            const { entidad, tipoFiscal } = valores
            setValoresFormulario({
                ...valoresFormulario,
                entidad,
                tipoFiscal,
            })
            history.push('/datos-contrato')
        },
    })

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Cabecera />
            <Layout>
                <Formulario onSubmit={formik.handleSubmit}>
                    <LineaFormulario>
                        <label htmlFor='entidad'>
                            Entidad <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='number'
                            id='entidad'
                            name='entidad'
                            value={formik.values.entidad}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    {formik.touched.entidad && formik.errors.entidad ? (
                        <Alerta
                            mensaje={formik.errors.entidad}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaFormulario>
                        <label htmlFor='tipo-entidad'>
                            Tipo <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo 
                            type='text' 
                            id='tipo-entidad' 
                            name='tipoEntidad' 
                            value={tipoEntidad} 
                            disabled />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='tipo-fiscal'>
                            Física/Jurídica{' '}
                            <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Select
                            id='tipo-fiscal'
                            name='tipoFiscal'
                            value={formik.values.tipoFiscal}
                            onChange={formik.handleChange}
                        >
                            <option>Persona Física</option>
                            <option>Persona Jurídica</option>
                        </Select>
                    </LineaFormulario>
                    <footer>
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
