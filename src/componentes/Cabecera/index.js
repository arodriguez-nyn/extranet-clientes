import React from 'react'

// Dependencias
import styled from 'styled-components'

/* ------------------------------------------------------------------- */
/* ------------------------- STYLED COMPONENTS ----------------------- */
/* ------------------------------------------------------------------- */
const CabeceraEstilos = styled.header`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: var(--primary-green);
    color: #fff;
    padding-left: 5px;
    padding-right: 10px;
    user-select: none;

    img {
        width: 200px;
        height: auto;
    }

    span {
        margin-left: 20px;
    }

    span:hover {
        cursor: pointer;
    }

    select {
        color: #fff;
        background-color: var(--primary-green);
        border: none;
    }

    @media (max-width: 412px) {
        img {
            width: 150px;
            height: auto;
        }
    }
`

const Cabecera = () => {
    /* ------------------------------------------------------------------- */
    /* -------------------- CONSTANTES Y DECLARACIONES ------------------- */
    /* ------------------------------------------------------------------- */
    return (
        <CabeceraEstilos>
            <img
                src={require('../../assets/img/logo-horiz-nn-rgb-amarillo.svg')}
                alt='Logo'
            />
            <select>
                <option>CA</option>
                <option>ES</option>
                <option>EN</option>
            </select>
        </CabeceraEstilos>
    )
}

export default Cabecera
