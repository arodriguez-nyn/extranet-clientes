import React from 'react'
import {render, screen} from '@testing-library/react'
import {tobeInTheDocument} from '@testing-library/jest-dom/extend-expect'
import Cabecera from 'componentes/Cabecera'

test('<Cabecera /> - Layout básico', () => {
    const wrapper = render(<Cabecera />)
    //wrapper.debug()

    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('IMG')
    expect(logo.tagName).not.toBe('DIV')
    expect(logo).toHaveAttribute('SRC')

    const idioma = screen.getByTestId('idioma')
    expect(idioma).toBeInTheDocument()
    expect(screen.getByDisplayValue('CA'))
})