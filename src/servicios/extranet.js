import axios from 'axios'

/***************
const URL_REST = 'http://localhost:8810/nynIntranet/rest/nynIntranetService/extcli/Submitextcli'
const URL_ARCHIVOS = 'http://192.168.1.45:4000/api/archivos/'
//const URL_ARCHIVOS = 'http://localhost:4000/api/archivos/'
const URL_LOGIN = 'http://localhost:8810/nynIntranet/static/auth/j_spring_security_check?OECP=yes&'
************/
const usuario = {
    nombre: 'cicle',
    password: 'cicle_nyn'
}

export const creaRegistro = async registro => {
    try {
        if(process.env.NODE_ENV === 'development'){
            console.log(process.env.REACT_APP_URL_REST)
            await axios.put(process.env.REACT_APP_URL_REST, registro)
        }else{
            await axios.put(process.env.REACT_APP_URL_REST_PROD, registro)
        }
        console.log('Alta Progress')
        
    } catch (error) {
        console.log(error)
    }
}

export const guardaArchivos = async (formData, entidad, documento) => {
    let url
    try {
        if(process.env.NODE_ENV === 'development'){
            url = `${process.env.REACT_APP_URL_ARCHIVOS}?${entidad}/${documento}`
        }else{
            url = `${process.env.REACT_APP_URL_ARCHIVOS_PROD}?${entidad}/${documento}`
        }

        console.log(url)

        await axios.post(
            url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        console.log('Archivos guardados')
        
    } catch (error) {
        console.log(error)
    }
}

export const altaRegistro = async (formData, entidad, documento, createExtcli) => {
    try {
        const { nombre, password } = usuario
        let url

        if(process.env.NODE_ENV === 'development'){
            url = `${process.env.REACT_APP_URL_LOGIN}j_username=${nombre}&j_password=${password}`
        }else{
            url = `${process.env.REACT_APP_URL_LOGIN_PROD}j_username=${nombre}&j_password=${password}`
        }

        await axios.post(url, usuario)
        await creaRegistro(createExtcli)
        await guardaArchivos(formData, entidad, documento)
        
    } catch (error) {
        console.log(error.response)
    }
}