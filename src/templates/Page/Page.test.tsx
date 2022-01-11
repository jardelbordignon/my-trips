import { render, screen } from '@testing-library/react'

import { PageTemplate } from '.'

jest.mock('@/components/utils/FloatingLink', () => {
  return {
    FloatingLink() {
      return <a href="/profile">My Account</a>
    }
  }
})

describe('Page Template', () => {
  it('deve poder renderizar o template', () => {
    render(<PageTemplate heading="My Trips" body="body" />)

    const heading = screen.getByRole('heading', { name: /my trips/i })

    expect(heading).toBeInTheDocument()
  })
})
