import React from 'react'
import {render, screen} from '@testing-library/react'
import {tobeInTheDocument} from '@testing-library/jest-dom/extend-expect'
import Entidad from 'pages/entidad'
import App from 'App'

test('<Entidad /> - Layout del formulario entidad', () => {
    render(<App />)
    const wrapper = render(<Entidad />)
    wrapper.debug()
})