import { render, screen } from '@testing-library/react'

import { Link } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return { asPath: '/profile' }
    }
  }
})

describe('Link', () => {
  it('Deve renderizar corretamente', () => {
    render(
      <Link href="/">
        <a>Home</a>
      </Link>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('Não deve renderizar quando estiver na rota corrente e unlessCurrent for true', () => {
    render(
      <Link href="/" unlessCurrent>
        <a>Home</a>
      </Link>
    )

    // usar queryBy para evitar de lançar um erro com getBy
    expect(screen.queryByText('Home')).not.toBeInTheDocument()
  })

  it('Deve ter classe active quando for o link atual', () => {
    render(
      <Link href="/">
        <a>Home</a>
      </Link>
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })

  it('Deve ter classe active quando href iniciar com o link atual', () => {
    render(
      <Link href="/">
        <a>Home</a>
      </Link>
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })

  it('Não deve ter classe active quando href iniciar com o link atual mas exact for configurada', () => {
    render(
      <Link href="/" exact>
        <a>Home</a>
      </Link>
    )

    expect(screen.getByText('Home')).not.toHaveClass('active')
  })
})
