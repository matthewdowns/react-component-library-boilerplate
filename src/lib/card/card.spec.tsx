import { render } from '@testing-library/react';
import React from 'react';
import Card from './card';
import CardProps from './card.props';

const children = <p>Children</p>;
const footer = <p>Footer</p>;
const header = <p>Header</p>;
const testid = 'card';

describe('Card', () => {
    it('renders', () => Promise.resolve(renderCard()));
    it('renders props:children', () => {
        const body = renderCard({ children });
        const card = body.getByTestId(testid);
        expect(card.children.length).toBe(1);
    });
    it('renders props:footer', () => {
        const body = renderCard({ footer });
        const card = body.getByTestId(testid);
        expect(card.children.length).toBe(2);
    })
    it('renders props:header', () => {
        const body = renderCard({ header });
        const card = body.getByTestId(testid);
        expect(card.children.length).toBe(2);
    });
});

const defaultProps: CardProps = {
    children,
    'data-testid': testid
};

function renderCard(props?: Partial<CardProps>) {
    return render(
        <Card
            {...defaultProps}
            {...props}
        />
    )
}
