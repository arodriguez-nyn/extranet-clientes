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
import { Titulo } from 'componentes/ui/Titulo'
import Cabecera from 'componentes/Cabecera'
import Alerta from 'componentes/Alerta'

const DatosContrato = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { oficinasPF, setOficinasPF } = appContext
    const {
        tratamiento,
        nombre,
        apellidos,
        tipoDocumento,
        documento,
    } = oficinasPF

    const formik = useFormik({
        initialValues: {
            tratamiento,
            nombre,
            apellidos,
            tipoDocumento,
            documento,
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellidos: Yup.string().required('Los apellidos son obligatorios'),
            documento: Yup.string().required('El documento es obligatorio'),
        }),
        onSubmit: valores => {
            const {
                tratamiento,
                nombre,
                apellidos,
                tipoDocumento,
                documento,
            } = valores
            setOficinasPF({
                ...oficinasPF,
                tratamiento,
                nombre,
                apellidos,
                tipoDocumento,
                documento,
            })
            history.push('/oficinas-pf/direccion-arrendatario')
        },
    })

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleRetroceder = () => {
        history.push('/')
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Cabecera />
            <Layout>
                <Formulario onSubmit={formik.handleSubmit}>
                    <Titulo>Datos Contrato</Titulo>
                    <LineaFormulario>
                        <label htmlFor='tratamiento'>
                            Tratamiento <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Select
                            id='tratamiento'
                            name='tratamiento'
                            value={formik.values.tratamiento}
                            width='100px'
                            onChange={formik.handleChange}
                        >
                            <option>Sr.</option>
                            <option>Sra.</option>
                        </Select>
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='nombre'>
                            Nombre <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    {formik.touched.nombre && formik.errors.nombre ? (
                        <Alerta
                            mensaje={formik.errors.nombre}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaFormulario>
                        <label htmlFor='apellidos'>
                            Apellidos <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='apellidos'
                            name='apellidos'
                            value={formik.values.apellidos}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    {formik.touched.apellidos && formik.errors.apellidos ? (
                        <Alerta
                            mensaje={formik.errors.apellidos}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaFormulario>
                        <label htmlFor='tipo-doc'>
                            Tipo Documento{' '}
                            <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Select
                            id='tipo-doc'
                            name='tipoDocumento'
                            value={formik.values.tipoDocumento}
                            width='150px'
                            onChange={formik.handleChange}
                        >
                            <option>DNI</option>
                            <option>NIE</option>
                            <option>Pasaporte</option>
                            <option>Permiso de Trabajo</option>
                            <option>Residencia</option>
                        </Select>
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='documento'>
                            Núm. Documento{' '}
                            <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='documento'
                            name='documento'
                            width='200px'
                            value={formik.values.documento}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    {formik.touched.documento && formik.errors.documento ? (
                        <Alerta
                            mensaje={formik.errors.documento}
                            width='100%'
                            error={true}
                        />
                    ) : null}
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
                            Siguiente &gt;&gt;
                        </Boton>
                    </footer>
                </Formulario>
            </Layout>
        </>
    )
}

export default DatosContrato
