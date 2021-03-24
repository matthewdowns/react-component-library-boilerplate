import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';
import ButtonGroup from './ButtonGroup';
import ButtonGroupProps from './ButtonGroup.props';

const children = [
    <Button key="button-1">
        Button 1
    </Button>,
    <Button key="button-2">
        Button 2
    </Button>,
    <Button key="button-3">
        Button 3
    </Button>
];
const testid = 'button-group';

describe('Card', () => {
    it('renders', () => Promise.resolve(renderCard()));
    it('renders props:children', () => {
        const body = renderCard({ children });
        const buttonGroup = body.getByTestId(testid);
        expect(buttonGroup.children.length).toBe(3);
        for (let i = 0; i < buttonGroup.children.length; i++) {
            expect(buttonGroup.children[i]).toHaveTextContent(`Button ${i + 1}`)
        }
    });
    it('renders props:block', () => {
        const body = renderCard({ block: true });
        const buttonGroup = body.getByTestId(testid);
        expect(buttonGroup).toHaveAttribute('data-block', 'true');
    });
    it('renders props:shape:square', () => {
        const body = renderCard({ shape: 'square' });
        const buttonGroup = body.getByTestId(testid);
        expect(buttonGroup).toHaveAttribute('data-shape', 'square');
    });
    it('renders props:shape:round', () => {
        const body = renderCard({ shape: 'round' });
        const buttonGroup = body.getByTestId(testid);
        expect(buttonGroup).toHaveAttribute('data-shape', 'round');
    });
    it('renders props:shape:circle', () => {
        const body = renderCard({ shape: 'circle' });
        const buttonGroup = body.getByTestId(testid);
        expect(buttonGroup).toHaveAttribute('data-shape', 'circle');
    });
});

const defaultProps: ButtonGroupProps = {
    children,
    'data-testid': testid
};

function renderCard(props?: Partial<ButtonGroupProps>) {
    return render(
        <ButtonGroup
            {...defaultProps}
            {...props}
        />
    )
}
