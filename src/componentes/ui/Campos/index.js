import styled from 'styled-components'

export const Campo = styled.input`
    height: 1.8rem;
    padding: 0.125rem 0.25rem;
    border-radius: 3px;
    border: 1px solid #c2c2c2;
    width: ${props => props.width ? props.width : '100%'};

    :focus {
        outline: none;
        border: 3px solid #5299c7aa;
    }
`
export const Select = styled.select`
    height: 1.8rem;
    padding: 0.125rem 0.25rem;
    border-radius: 3px;
    border: 1px solid #c2c2c2;
    background-color: #fff;
    width: ${props => props.width ? props.width : '100%'};

    :focus {
        outline: none;
        border: 3px solid #5299c7aa;
    }

    @media (max-width: 412px) {
        width: 100%;
    }
`
