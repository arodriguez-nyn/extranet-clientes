import React, { useContext } from 'react'

// Dependencias
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

// Context
import AppContext from 'context/AppContext'

// Componentes
import Layout from 'componentes/Layout'
import { Campo, Select } from 'componentes/ui/Campos'
import { Boton } from 'componentes/ui/Boton'
import { Formulario, LineaFormulario } from 'componentes/ui/Formulario'
import { Titulo } from 'componentes/ui/Titulo'
import { Subtitulo } from 'componentes/ui/Subtitulo'
import Cabecera from 'componentes/Cabecera'

const OtrosDatosContacto = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    const history = useHistory()
    const appContext = useContext(AppContext)
    const { valoresFormulario, setValoresFormulario } = appContext
    const {
        contacto1,
        nombre1,
        telefono1,
        email1,
        contacto2,
        nombre2,
        telefono2,
        email2,
        contacto3,
        nombre3,
        telefono3,
        email3,
    } = valoresFormulario

    const formik = useFormik({
        initialValues: {
            contacto1,
            nombre1,
            telefono1,
            email1,
            contacto2,
            nombre2,
            telefono2,
            email2,
            contacto3,
            nombre3,
            telefono3,
            email3,
        },
        onSubmit: valores => {
            const { contacto1, nombre1, telefono1, email1 } = valores
            setValoresFormulario({
                ...valoresFormulario,
                contacto1,
                nombre1,
                telefono1,
                email1,
                contacto2,
                nombre2,
                telefono2,
                email2,
                contacto3,
                nombre3,
                telefono3,
                email3,
            })
            history.push('/documentacion')
        },
    })

    /* ------------------------------------------------------------------- */
    /* ----------------------------- FUNCIONES --------------------------- */
    /* ------------------------------------------------------------------- */
    const handleRetroceder = () => {
        history.push('/direccion-correspondencia')
    }

    /* ------------------------------------------------------------------- */
    /* --------------------------- RENDERIZADO --------------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <>
            <Cabecera />
            <Layout>
                <Formulario onSubmit={formik.handleSubmit}>
                    <Titulo>Otros datos de contacto</Titulo>
                    <Subtitulo>Contacto 1</Subtitulo>
                    <LineaFormulario>
                        <label htmlFor='tipoContacto1'>Tipo Contacto</label>
                        <Select
                            id='tipoContacto1'
                            name='tipoContacto1'
                            width='300px'
                            value={formik.values.tipoContacto1}
                            onChange={formik.handleChange}
                        >
                            <option>Personal Limpieza</option>
                            <option>Familiar</option>
                            <option>Servicio</option>
                        </Select>
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='contacto1'>Nombre y Apellidos</label>
                        <Campo
                            type='text'
                            id='contacto1'
                            name='contacto1'
                            value={formik.values.contacto1}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='telefono1'>Teléfono</label>
                        <Campo
                            type='text'
                            id='telefono1'
                            name='telefono1'
                            width='300px'
                            value={formik.values.telefono1}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='email1'>Email</label>
                        <Campo
                            type='email'
                            id='email1'
                            name='email1'
                            value={formik.values.email1}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <Subtitulo>Contacto 2</Subtitulo>
                    <LineaFormulario>
                        <label htmlFor='tipoContacto2'>Tipo Contacto</label>
                        <Select
                            id='tipoContacto2'
                            name='tipoContacto2'
                            width='300px'
                            value={formik.values.tipoContacto2}
                            onChange={formik.handleChange}
                        >
                            <option>Personal Limpieza</option>
                            <option>Familiar</option>
                            <option>Servicio</option>
                        </Select>
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='contacto2'>Nombre y Apellidos</label>
                        <Campo
                            type='text'
                            id='contacto2'
                            name='contacto2'
                            value={formik.values.contacto2}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='telefono2'>Teléfono</label>
                        <Campo
                            type='text'
                            id='telefono2'
                            name='telefono2'
                            width='300px'
                            value={formik.values.telefono2}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='email2'>Email</label>
                        <Campo
                            type='email'
                            id='email2'
                            name='email2'
                            value={formik.values.email2}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <Subtitulo>Contacto 3</Subtitulo>
                    <LineaFormulario>
                        <label htmlFor='tipoContacto3'>Tipo Contacto</label>
                        <Select
                            id='tipoContacto3'
                            name='tipoContacto3'
                            width='300px'
                            value={formik.values.tipoContacto3}
                            onChange={formik.handleChange}
                        >
                            <option>Personal Limpieza</option>
                            <option>Familiar</option>
                            <option>Servicio</option>
                        </Select>
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='contacto3'>Nombre y Apellidos</label>
                        <Campo
                            type='text'
                            id='contacto3'
                            name='contacto3'                            
                            value={formik.values.contacto3}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='telefono3'>Teléfono</label>
                        <Campo
                            type='text'
                            id='telefono3'
                            name='telefono3'
                            width='300px'
                            value={formik.values.telefono3}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
                    <LineaFormulario>
                        <label htmlFor='email3'>Email</label>
                        <Campo
                            type='email'
                            id='email3'
                            name='email3'
                            value={formik.values.email3}
                            onChange={formik.handleChange}
                        />
                    </LineaFormulario>
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

export default OtrosDatosContacto
