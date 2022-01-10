import { render, screen } from '@testing-library/react'

import { FloatingLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return { asPath: '/profile' }
    }
  }
})

describe('FloatingLink', () => {
  it('deve poder renderizar um link flutuante com conteúdo', () => {
    render(
      <FloatingLink href="/profile">
        <a>My account</a>
      </FloatingLink>
    )

    const link = screen.getByRole('link', { name: /my account/i })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/profile')

    screen.logTestingPlaygroundURL()
  })
})
