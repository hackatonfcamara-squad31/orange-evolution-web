import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Test } from '.'

describe('<Test />', () => {
  it('should render the Test heading', () => {
    const { container } = render(<Test />)

    const heading = within(screen.getByRole('heading', { name: /Test/i }))

    expect(heading).toBeDefined()

    expect(container.firstChild).toMatchSnapshot()
  })
})
