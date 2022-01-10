import { render, screen } from '@testing-library/react'

import { Home } from '..'

describe('Home', () => {
  it('deve renderizar um heading com o texto React Avançado', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /My Trips/i })
    ).toBeInTheDocument()
  })

  it('deve renderizar o heading conforme o snapshot', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve renderizar as cores corretamente', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
