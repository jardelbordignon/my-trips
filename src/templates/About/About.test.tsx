import { render, screen } from '@testing-library/react'

import { AboutTemplate } from '.'

jest.mock('@/components/utils/FloatingLink', () => {
  return {
    FloatingLink() {
      return <a href="/profile">My Account</a>
    }
  }
})

describe('About Template', () => {
  it('deve poder renderizar o template', () => {
    render(<AboutTemplate />)

    const heading = screen.getByRole('heading', { name: /my trips/i })

    expect(heading).toBeInTheDocument()
  })
})
