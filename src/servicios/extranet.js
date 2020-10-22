import axios from 'axios'

const URL_REST = 'http://localhost:8810/nynIntranet/rest/nynIntranetService/extcli/Submitextcli'
const URL_ARCHIVOS = 'http://192.168.1.102:4000/api/archivos/'
//const URL_ARCHIVOS = 'http://localhost:4000/api/archivos/'
const URL_LOGIN = 'http://localhost:8810/nynIntranet/static/auth/j_spring_security_check?OECP=yes&'
const usuario = {
    nombre: 'cicle',
    password: 'cicle_nyn'
}

export const creaRegistro = async registro => {
    try {
        await axios.put(URL_REST, registro)
    } catch (error) {
        console.log(error)
    }
}

export const guardaArchivos = async (formData, entidad, documento) => {
    try {
        // Guardamos los ficheros en el servidor
        const url = `${URL_ARCHIVOS}${entidad}/${documento}`
        await axios.post(
            url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const login = async () => {
    try {
        const { nombre, password } = usuario
        const url = `${URL_LOGIN}j_username=${nombre}&j_password=${password}`
        await axios.post(url, usuario)
    } catch (error) {
        console.log(error)
    }
}