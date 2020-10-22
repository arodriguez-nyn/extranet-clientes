import styled from 'styled-components'

export const Boton = styled.button`
    margin-top: 0.5rem;
    background-color: #fff;
    color: var(--primary-yellow);
    border: 1px solid var(--primary-yellow);
    padding: 0.35rem 0.65rem;
    border-radius: 3px;
    letter-spacing: 0.125rem;
    width: ${props => props.width};
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
    margin-top: ${props => (props.marginTop ? props.marginTop : 0)};

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
    }
`
