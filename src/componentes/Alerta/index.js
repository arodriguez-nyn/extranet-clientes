import React from 'react'

// Dependencias
import styled from 'styled-components'

const AlertaEstilos = styled.div`
    padding: 0.5rem 0.75rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${props => (props.error ? '#e85e5e' : '#329e32')};
    border-radius: 0.25rem;
    text-align: center;
    color: #fff;
    width: ${props => props.width || '50%'};
`

const Alerta = ({ mensaje, width, error }) => {
    return (
        <AlertaEstilos width={width} error={error}>
            {mensaje}
        </AlertaEstilos>
    )
}

export default Alerta
