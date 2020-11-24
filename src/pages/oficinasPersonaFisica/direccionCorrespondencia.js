import React, { useContext, useState } from 'react'

// Dependencias
import styled from 'styled-components'
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

/* ------------------------------------------------------------------- */
/* ------------------------- STYLED COMPONENTS ------------------------ */
/* ------------------------------------------------------------------- */
const LineaDireccion = styled.span`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: ${props =>
        props.columnas ? props.columnas : '1fr 1fr'};
    margin-top: 0.5rem;
`

const MismaDireccion = styled.span`
    border-bottom: 1px dashed #c2c2c2;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    padding-bottom: 0.25rem;
`

const DireccionCorrespondencia = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { oficinasPF, setOficinasPF } = appContext
    const {
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
        emailCorrespondencia,
        direccionCorrespondenciaContrato,
    } = oficinasPF
    const [mismaDireccion, setMismaDireccion] = useState(direccionCorrespondenciaContrato)

    const formik = useFormik({
        initialValues: {
            direccionCorrespondenciaContrato: mismaDireccion,
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
            emailCorrespondencia,
        },
        validationSchema: !mismaDireccion && Yup.object({
            tipoViaCorrespondencia: Yup.string().required(
                'El tipo de vía es obligatorio'
            ),
            direccionCorrespondencia: Yup.string().required(
                'La dirección es obligatoria'
            ),
            numeroCorrespondencia: Yup.string().required(
                'El número es obligatorio'
            ),
            codigoPostalCorrespondencia: Yup.string().required(
                'El código postal es obligatorio'
            ),
            localidadCorrespondencia: Yup.string().required(
                'La localidad es obligatoria'
            ),
            provinciaCorrespondencia: Yup.string().required(
                'La provincia es obligatoria'
            ),
            paisCorrespondencia: Yup.string().required(
                'El país es obligatorio'
            ),
            emailCorrespondencia: Yup.string().required(
                'El e-mail es obligatorio'
            ).email('Introduce un correo electrónico válido'),
        }),
        onSubmit: valores => {
            const {
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
                emailCorrespondencia,
            } = valores
            setOficinasPF({
                ...oficinasPF,
                tipoViaCorrespondencia: !direccionCorrespondenciaContrato ? tipoViaCorrespondencia : '',
                direccionCorrespondencia: !direccionCorrespondenciaContrato ? direccionCorrespondencia : '',
                numeroCorrespondencia: !direccionCorrespondenciaContrato ? numeroCorrespondencia : '',
                bloqueCorrespondencia: !direccionCorrespondenciaContrato ? bloqueCorrespondencia : '',
                escaleraCorrespondencia: !direccionCorrespondenciaContrato ? escaleraCorrespondencia : '',
                pisoCorrespondencia: !direccionCorrespondenciaContrato ? pisoCorrespondencia : '',
                puertaCorrespondencia: !direccionCorrespondenciaContrato ? puertaCorrespondencia : '',
                codigoPostalCorrespondencia: !direccionCorrespondenciaContrato ? codigoPostalCorrespondencia : '',
                localidadCorrespondencia: !direccionCorrespondenciaContrato ? localidadCorrespondencia : '',
                provinciaCorrespondencia: !direccionCorrespondenciaContrato ? provinciaCorrespondencia : '',
                paisCorrespondencia: !direccionCorrespondenciaContrato ? paisCorrespondencia : '',
                telefonoCorrespondencia: !direccionCorrespondenciaContrato ? telefonoCorrespondencia : '',
                emailCorrespondencia: !direccionCorrespondenciaContrato ? emailCorrespondencia : '',
                direccionCorrespondenciaContrato: mismaDireccion,                
            })
            history.push('/oficinas-pf/otros-contacto')
        },
    })

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleRetroceder = () => {
        history.push('/oficinas-pf/direccion-arrendatario')
    }

    const handleMismaDireccion = e =>  {
        setMismaDireccion(!mismaDireccion)
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Cabecera />
            <Layout>
                <Formulario onSubmit={formik.handleSubmit}>
                    <Titulo>Dirección de Correspondencia</Titulo>
                    <MismaDireccion>
                        <label htmlFor='mismaDireccion'>
                            Misma que el Contrato
                        </label>
                        <input
                            type='checkbox'
                            name='mismaDireccion'
                            id='mismaDireccion'
                            checked={mismaDireccion}
                            value={mismaDireccion}
                            onChange={handleMismaDireccion}
                        />
                    </MismaDireccion>
                    <LineaFormulario>
                        <label htmlFor='tipoViaCorrespondencia'>
                            Tipo Vía <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Select
                            id='tipoViaCorrespondencia'
                            name='tipoViaCorrespondencia'
                            value={formik.values.tipoViaCorrespondencia}
                            width='150px'
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        >
                            <option></option>
                            <option>Calle</option>
                            <option>Avenida</option>
                        </Select>
                        {!mismaDireccion && formik.touched.tipoViaCorrespondencia &&
                        formik.errors.tipoViaCorrespondencia ? (
                            <Alerta
                                mensaje={formik.errors.tipoViaCorrespondencia}
                                width='100%'
                                error={true}
                            />
                        ) : null}
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='direccionCorrespondencia'>
                            Dirección <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='direccionCorrespondencia'
                            name='direccionCorrespondencia'
                            value={formik.values.direccionCorrespondencia}
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        />
                    </LineaFormulario>
                    {!mismaDireccion && formik.touched.direccionCorrespondencia &&
                    formik.errors.direccionCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.direccionCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 1fr 1fr'>
                        <span>
                            <label htmlFor='numeroCorrespondencia'>
                                Número <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='numeroCorrespondencia'
                                name='numeroCorrespondencia'
                                value={formik.values.numeroCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='bloqueCorrespondencia'>
                                Bloque
                            </label>
                            <Campo
                                type='text'
                                id='bloqueCorrespondencia'
                                name='bloqueCorrespondencia'
                                value={formik.values.bloqueCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='escaleraCorrespondencia'>
                                Escalera
                            </label>
                            <Campo
                                type='text'
                                id='escaleraCorrespondencia'
                                name='escaleraCorrespondencia'
                                value={formik.values.escaleraCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.numeroCorrespondencia &&
                    formik.errors.numeroCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.numeroCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.bloqueCorrespondencia &&
                    formik.errors.bloqueCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.bloqueCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.escaleraCorrespondencia &&
                    formik.errors.escaleraCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.escaleraCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 1fr 1fr'>
                        <span>
                            <label htmlFor='pisoCorrespondencia'>Piso</label>
                            <Campo
                                type='text'
                                id='pisoCorrespondencia'
                                name='pisoCorrespondencia'
                                value={formik.values.pisoCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='puertaCorrespondencia'>
                                Puerta
                            </label>
                            <Campo
                                type='text'
                                id='puertaCorrespondencia'
                                name='puertaCorrespondencia'
                                value={formik.values.puertaCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='codigoPostalCorrespondencia'>
                                Código Postal{' '}
                                <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='codigoPostalCorrespondencia'
                                name='codigoPostalCorrespondencia'
                                value={
                                    formik.values.codigoPostalCorrespondencia
                                }
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.codigoPostalCorrespondencia &&
                    formik.errors.codigoPostalCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.codigoPostalCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <div>
                        <label htmlFor='localidadCorrespondencia'>
                            Localidad <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='localidadCorrespondencia'
                            name='localidadCorrespondencia'
                            value={formik.values.localidadCorrespondencia}
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        />
                    </div>
                    {!mismaDireccion && formik.touched.localidadCorrespondencia &&
                    formik.errors.localidadCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.localidadCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='2fr 1fr'>
                        <span>
                            <label htmlFor='provinciaCorrespondencia'>
                                Provincia <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='provinciaCorrespondencia'
                                name='provinciaCorrespondencia'
                                value={formik.values.provinciaCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='paisCorrespondencia'>
                                País <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='paisCorrespondencia'
                                name='paisCorrespondencia'
                                value={formik.values.paisCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.provinciaCorrespondencia &&
                    formik.errors.provinciaCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.provinciaCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.paisCorrespondencia &&
                    formik.errors.paisCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.paisCorrespondencia}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 2fr'>
                        <span>
                            <label htmlFor='telefonoCorrespondencia'>
                                Teléfono
                            </label>
                            <Campo
                                type='text'
                                id='telefonoCorrespondencia'
                                name='telefonoCorrespondencia'
                                value={formik.values.telefonoCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='emailCorrespondencia'>
                                Email <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='emailCorrespondencia'
                                name='emailCorrespondencia'
                                value={formik.values.emailCorrespondencia}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.emailCorrespondencia &&
                    formik.errors.emailCorrespondencia ? (
                        <Alerta
                            mensaje={formik.errors.emailCorrespondencia}
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

export default DireccionCorrespondencia
