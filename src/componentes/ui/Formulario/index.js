import styled from 'styled-components'

export const Formulario = styled.form`
    display: block;
    width: 70%;
    min-height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    color: var(--dark-gray);
    padding: 1rem;
    background: var(--gray-background);
    
    footer{
        display: flex;
        justify-content: flex-end;
        margin-top: 0.5rem;
        border-top: 1px solid #c2c2c2;
    }

        @media (max-width: 412px) {        
            width: 100%;

        footer{
            display: grid;
            grid-template-columns: 1fr 1fr;
        } 

        .footer-one-button {
            display: flex;
            justify-content: flex-end;
        }
    }
`

export const LineaFormulario = styled.div`
    margin-top: 0.5rem;
    display: grid;    
`

export const CampoObligatorio = styled.span`
    color: #c52424;
    font-weight: bold;
`
