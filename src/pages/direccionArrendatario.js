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

const DireccionArrendatario = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { valoresFormulario, setValoresFormulario } = appContext
    const {
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
        direccionArrendatarioContrato
    } = valoresFormulario
    const [mismaDireccion, setMismaDireccion] = useState(direccionArrendatarioContrato)

    const formik = useFormik({
        initialValues: {
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
            direccionArrendatarioContrato: mismaDireccion,
        },
        validationSchema: !mismaDireccion && Yup.object({
            tipoViaArrendatario: Yup.string().required(
                'El tipo de vía es obligatorio'
            ),
            direccionArrendatario: Yup.string().required(
                'La dirección es obligatoria'
            ),
            numeroArrendatario: Yup.string().required(
                'El número es obligatorio'
            ),
            codigoPostalArrendatario: Yup.string().required(
                'El código postal es obligatorio'
            ),
            localidadArrendatario: Yup.string().required(
                'La localidad es obligatoria'
            ),
            provinciaArrendatario: Yup.string().required(
                'La provincia es obligatoria'
            ),
            paisArrendatario: Yup.string().required('El país es obligatorio'),
            emailArrendatario: Yup.string().required(
                'El e-mail es obligatorio'
            ).email('Introduce un correo electrónico válido'),
        }),
        onSubmit: valores => {
            const {
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
                direccionArrendatarioContrato,
            } = valores
            setValoresFormulario({
                ...valoresFormulario,
                tipoViaArrendatario: !direccionArrendatarioContrato ? tipoViaArrendatario : '',
                direccionArrendatario: !direccionArrendatarioContrato ? direccionArrendatario : '',
                numeroArrendatario: !direccionArrendatarioContrato ? numeroArrendatario : '',
                bloqueArrendatario: !direccionArrendatarioContrato ? bloqueArrendatario : '',
                escaleraArrendatario: !direccionArrendatarioContrato ? escaleraArrendatario : '',
                pisoArrendatario: !direccionArrendatarioContrato ? pisoArrendatario : '',
                puertaArrendatario: !direccionArrendatarioContrato ? puertaArrendatario : '',
                codigoPostalArrendatario: !direccionArrendatarioContrato ? codigoPostalArrendatario : '',
                localidadArrendatario: !direccionArrendatarioContrato ? localidadArrendatario : '',
                provinciaArrendatario: !direccionArrendatarioContrato ? provinciaArrendatario : '',
                paisArrendatario: !direccionArrendatarioContrato ? paisArrendatario : '',
                telefonoArrendatario: !direccionArrendatarioContrato ? telefonoArrendatario : '',
                emailArrendatario: !direccionArrendatarioContrato ? emailArrendatario : '',
                direccionArrendatarioContrato: mismaDireccion,                
            })
            history.push('/direccion-correspondencia')
        },
    })

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleRetroceder = () => {
        history.push('/datos-contrato')
    }

    const handleMismaDireccion = e => {
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
                    <Titulo>Dirección del Arrendatario</Titulo>
                    <MismaDireccion>
                        <label htmlFor='direccionArrendatarioContrato'>
                            Misma que el Contrato
                        </label>
                        <input
                            type='checkbox'
                            name='direccionArrendatarioContrato'
                            id='direccionArrendatarioContrato'
                            value={mismaDireccion}
                            checked={mismaDireccion}
                            onChange={handleMismaDireccion}
                        />
                    </MismaDireccion>
                    <LineaFormulario>
                        <label htmlFor='tipoVia'>
                            Tipo Vía <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Select
                            id='tipoVia'
                            name='tipoViaArrendatario'
                            value={formik.values.tipoViaArrendatario}
                            width='150px'
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        >
                            <option value=''></option>
                            <option value='Calle'>Calle</option>
                            <option value='Avenida'>Avenida</option>
                        </Select>
                        {!mismaDireccion && formik.touched.tipoViaArrendatario &&
                        formik.errors.tipoViaArrendatario ? (
                            <Alerta
                                mensaje={formik.errors.tipoViaArrendatario}
                                width='100%'
                                error={true}
                            />
                        ) : null}
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='direccionArrendatario'>
                            Dirección <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='direccionArrendatario'
                            name='direccionArrendatario'
                            value={formik.values.direccionArrendatario}
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        />
                    </LineaFormulario>
                    {!mismaDireccion && formik.touched.direccionArrendatario &&
                    formik.errors.direccionArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.direccionArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 1fr 1fr'>
                        <span>
                            <label htmlFor='numeroArrendatario'>
                                Número <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='numeroArrendatario'
                                name='numeroArrendatario'
                                value={formik.values.numeroArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='bloqueArrendatario'>Bloque</label>
                            <Campo
                                type='text'
                                id='bloqueArrendatario'
                                name='bloqueArrendatario'
                                value={formik.values.bloqueArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='escaleraArrendatario'>
                                Escalera
                            </label>
                            <Campo
                                type='text'
                                id='escaleraArrendatario'
                                name='escaleraArrendatario'
                                value={formik.values.escaleraArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.numeroArrendatario &&
                    formik.errors.numeroArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.numeroArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.bloqueArrendatario &&
                    formik.errors.bloqueArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.bloqueArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.escaleraArrendatario &&
                    formik.errors.escaleraArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.escaleraArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 1fr 1fr'>
                        <span>
                            <label htmlFor='pisoArrendatario'>Piso</label>
                            <Campo
                                type='text'
                                id='pisoArrendatario'
                                name='pisoArrendatario'
                                value={formik.values.pisoArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='puertaArrendatario'>Puerta</label>
                            <Campo
                                type='text'
                                id='puertaArrendatario'
                                name='puertaArrendatario'
                                value={formik.values.puertaArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='codigoPostalArrendatario'>
                                Código Postal{' '}
                                <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='codigoPostalArrendatario'
                                name='codigoPostalArrendatario'
                                value={formik.values.codigoPostalArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.codigoPostalArrendatario &&
                    formik.errors.codigoPostalArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.codigoPostalArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <div>
                        <label htmlFor='localidadArrendatario'>
                            Localidad <CampoObligatorio>*</CampoObligatorio>
                        </label>
                        <Campo
                            type='text'
                            id='localidadArrendatario'
                            name='localidadArrendatario'
                            value={formik.values.localidadArrendatario}
                            onChange={formik.handleChange}
                            disabled={mismaDireccion}
                        />
                    </div>
                    {!mismaDireccion && formik.touched.localidadArrendatario &&
                    formik.errors.localidadArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.localidadArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='2fr 1fr'>
                        <span>
                            <label htmlFor='provinciaArrendatario'>
                                Provincia <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='provinciaArrendatario'
                                name='provinciaArrendatario'
                                value={formik.values.provinciaArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='paisArrendatario'>
                                País <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='paisArrendatario'
                                name='paisArrendatario'
                                value={formik.values.paisArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.provinciaArrendatario &&
                    formik.errors.provinciaArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.provinciaArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    {!mismaDireccion && formik.touched.paisArrendatario &&
                    formik.errors.paisArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.paisArrendatario}
                            width='100%'
                            error={true}
                        />
                    ) : null}
                    <LineaDireccion columnas='1fr 2fr'>
                        <span>
                            <label htmlFor='telefonoArrendatario'>
                                Teléfono
                            </label>
                            <Campo
                                type='text'
                                id='telefonoArrendatario'
                                name='telefonoArrendatario'
                                value={formik.values.telefonoArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                        <span>
                            <label htmlFor='emailArrendatario'>
                                Email <CampoObligatorio>*</CampoObligatorio>
                            </label>
                            <Campo
                                type='text'
                                id='emailArrendatario'
                                name='emailArrendatario'
                                value={formik.values.emailArrendatario}
                                onChange={formik.handleChange}
                                disabled={mismaDireccion}
                            />
                        </span>
                    </LineaDireccion>
                    {!mismaDireccion && formik.touched.emailArrendatario &&
                    formik.errors.emailArrendatario ? (
                        <Alerta
                            mensaje={formik.errors.emailArrendatario}
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

export default DireccionArrendatario
