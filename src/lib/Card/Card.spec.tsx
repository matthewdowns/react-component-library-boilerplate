import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import CardProps from './Card.props';

const children = 'Card';
const title = 'Title';
const testid = 'card';

describe('Card', () => {
    it('renders', () => Promise.resolve(renderCard()));
    it('renders props:children', () => {
        const body = renderCard({ children });
        const card = body.getByTestId(testid);
        const cardBody = card.children[0]; // no title, so body is the first child
        expect(cardBody).toHaveTextContent(children);
    });
    it('renders props:title', () => {
        const body = renderCard({ title });
        const card = body.getByTestId(testid);
        const cardHead = card.children[0];
        expect(cardHead).toHaveTextContent(title);
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
