import { render } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import ButtonProps from './Button.props';

const children = 'Button';
const testid = 'button';

describe(Button.name, () => {
    it('renders', () => Promise.resolve(renderButton()));
    it('props:children', () => {
        const body = renderButton();
        const text = body.getByText(children);
        expect(text).toBeVisible();
    });
    it('props:disabled', () => {
        const body = renderButton({ disabled: true });
        expect(body.getByTestId(testid)).toBeDisabled();
    });
})

const defaultProps: ButtonProps = {
    children,
    'data-testid': testid
};

function renderButton(props?: Partial<ButtonProps>) {
    return render(
        <Button
            {...defaultProps}
            {...props}
        />
    )
}
