import { render, screen } from '@testing-library/react'

import { Map } from '.'

jest.mock('@/components/utils/FloatingLink', () => {
  return {
    FloatingLink() {
      return <a href="/profile">My Account</a>
    }
  }
})

describe('Map Template', () => {
  it('deve poder renderizar o leaflet', () => {
    render(<Map places={[]} />)

    //screen.logTestingPlaygroundURL()
    const openstreetmapPNG = screen.getByRole('presentation')
    expect(openstreetmapPNG).toBeInTheDocument()
  })

  it('deve poder renderizar marcadores em determinados pontos', () => {
    const place1 = {
      id: '1',
      name: 'Carazinho',
      slug: 'carazinho',
      location: {
        latitude: -28.2751468,
        longitude: -52.8312789
      }
    }

    const place2 = {
      id: '2',
      name: 'Balneário Camboriú',
      slug: 'balneario-camboriu',
      location: {
        latitude: -27.0057044,
        longitude: -48.6870244
      }
    }

    render(<Map places={[place1, place2]} />)

    expect(screen.getByTitle(/carazinho/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Balneário Camboriú/i)).toBeInTheDocument()
  })
})
