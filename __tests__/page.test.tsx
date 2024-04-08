// https://nextjs.org/docs/app/building-your-application/testing/vitest

import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders and finds expected elements', () => {
    render(<Home />)

    const elements = [
      { text: /Get Started/i, name: 'getStartedButton' },
      { text: /Linear is a better way/i, name: 'heroTitle' },
      {
        text: /Meet the new standard for modern software development./i,
        name: 'heroSubtitle'
      },
      { altText: /Hero image/i, name: 'heroImage' }
    ]

    elements.forEach(({ text, altText }) => {
      const element = text
        ? screen.getByText(text)
        : screen.getByAltText(altText)
      expect(element).toBeDefined()
    })
  })
})
