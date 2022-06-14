import { render } from '@testing-library/react';
import React from 'react';
import Card from './card';
import CardProps from './card.props';

const children = <p>Children</p>;
const header = <p>Header</p>;
const footer = <p>Footer</p>;
const testid = 'card';

describe('Card', () => {
    it('matches snapshot', () => {
        const body = renderCard({ children, header, footer })
        expect(body.container).toMatchSnapshot()
    })

    it('renders props:children', () => {
        const body = renderCard({ children })
        const element = body.getByTestId(testid)
        expect(element.children.length).toBe(1)
        expect(element.children[0].textContent).toBe('Children')
    })

    it('renders props:header', () => {
        const body = renderCard({ header })
        const element = body.getByTestId(testid)
        expect(element.children.length).toBe(2)
        expect(element.children[0].textContent).toBe('Header')
    })

    it('renders props:footer', () => {
        const body = renderCard({ footer })
        const element = body.getByTestId(testid)
        expect(element.children.length).toBe(2)
        expect(element.children[1].textContent).toBe('Footer')
    })
})

const defaultProps: CardProps = {
    children,
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
