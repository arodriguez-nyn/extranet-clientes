import styled from 'styled-components'

export const Formulario = styled.form`
    display: block;
    height: auto;
    margin: 0 auto;
    margin-top: 50px;
    color: var(--dark-gray);
    padding: 1rem;

    fieldset {
        border: 1px solid #c2c2c2;
        border-radius: 3px;
        padding: 0.5rem 1rem;
        padding-bottom: 1rem;
        margin-inline-start: 0;
        margin-inline-end: 0;

        legend {
            font-weight: bold;
        }
    }

    @media (max-width: 412px) {
        footer {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`

export const LineaFormulario = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
`

export const CampoObligatorio = styled.span`
    color: #c52424;
    font-weight: bold;
`
