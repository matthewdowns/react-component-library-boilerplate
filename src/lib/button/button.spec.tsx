import { render } from '@testing-library/react'
import React from 'react'
import Button from './button'
import ButtonProps from './button.props'

const children = 'Button'
const testid = 'button'

describe('Button', () => {
    it('matches snapshot', () => {
        const body = renderButton({ children })
        expect(body.container).toMatchSnapshot()
    })

    it('renders props:children', () => {
        const body = renderButton()
        const button = body.getByTestId(testid)
        expect(button).toHaveTextContent(children)
    })

    it('renders props:block', () => {
        const body = renderButton({ block: true })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-block', 'true')
    })

    it('renders props:disabled', () => {
        const body = renderButton({ disabled: true })
        const button = body.getByTestId(testid)
        expect(button).toBeDisabled()
    })

    it('renders props:hollow', () => {
        const body = renderButton({ hollow: true })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-hollow', 'true')
    })

    it('renders props:shape:square', () => {
        const body = renderButton({ shape: 'square' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-shape', 'square')
    })

    it('renders props:shape:round', () => {
        const body = renderButton({ shape: 'round' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-shape', 'round')
    })

    it('renders props:shape:circle', () => {
        const body = renderButton({ shape: 'circle' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-shape', 'circle')
    })

    it('renders props:size:small', () => {
        const body = renderButton({ size: 'small' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-size', 'small')
    })

    it('renders props:size:medium', () => {
        const body = renderButton({ size: 'medium' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-size', 'medium')
    })

    it('renders props:size:large', () => {
        const body = renderButton({ size: 'large' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-size', 'large')
    })

    it('renders props:variant:primary', () => {
        const body = renderButton({ variant: 'primary' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-variant', 'primary')
    })

    it('renders props:variant:secondary', () => {
        const body = renderButton({ variant: 'secondary' })
        const button = body.getByTestId(testid)
        expect(button).toHaveAttribute('data-variant', 'secondary')
    })
})

const defaultProps: ButtonProps = {
    children,
    'data-testid': testid
}

function renderButton(props?: Partial<ButtonProps>) {
    return render(
        <Button
            {...defaultProps}
            {...props}
        />
    )
}
