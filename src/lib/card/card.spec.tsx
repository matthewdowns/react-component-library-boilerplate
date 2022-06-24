import { render } from '@testing-library/react'
import React from 'react'
import Card from './card'
import CardProps from './card.props'

const children = <p>Children</p>
const className = 'my-class'
const header = <p>Header</p>
const footer = <p>Footer</p>
const testid = 'card'

describe('Card', () => {
  it('matches snapshot', () => {
    const body = renderCard({
      children,
      className,
      header,
      footer
    })
    expect(body).toMatchSnapshot()
  })

  it('renders props:className', () => {
    const body = renderCard({ className })
    const card = body.getByTestId(testid)
    expect(card.classList.contains(className)).toBeTruthy()
  })

  it('renders props:header', () => {
    const body = renderCard({ header })
    const card = body.getByTestId(testid)
    const cardHeader = card.firstChild!
    expect(cardHeader.firstChild!.nodeName.toLowerCase()).toBe('p')
    expect(cardHeader.firstChild!.textContent).toBe('Header')
  })

  it('renders props:children', () => {
    const body = renderCard({ children })
    const card = body.getByTestId(testid)
    const cardBody = card.firstChild!
    expect(cardBody.firstChild!.nodeName.toLowerCase()).toBe('p')
    expect(cardBody.firstChild!.textContent).toBe('Children')
  })

  it('renders props:footer', () => {
    const body = renderCard({ footer })
    const card = body.getByTestId(testid)
    console.log(card.innerHTML)
    const cardFooter = card.firstChild!
    expect(cardFooter.firstChild!.nodeName.toLowerCase()).toBe('p')
    expect(cardFooter.firstChild!.textContent).toBe('Footer')
  })
})

const defaultProps: CardProps = {
  'data-testid': testid
}

function renderCard(props?: Partial<CardProps>) {
  return render(
    <Card
      {...defaultProps}
      {...props}
    />
  )
}
