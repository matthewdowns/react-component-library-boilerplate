import React, { Fragment } from 'react';
import Button from './Button';

export default {
    title: Button.name,
    component: Button,
    parameters: {
        actions: {
            handles: ['click']
        }
    }
}

export const Default = (): JSX.Element => (
    <Button>
        Button
    </Button>
);

export const Block = (): JSX.Element => (
    <Button block={true}>
        Block
    </Button>
);

export const Border = (): JSX.Element => (
    <Button>
        Border
    </Button>
)

export const Disabled = (): JSX.Element => (
    <Button disabled={true}>
        Disabled
    </Button>
);

export const Shape = (): JSX.Element => (
    <Fragment>
        <Button shape="square">
            Square
        </Button>
        <Button shape="round">
            Round
        </Button>
        <Button shape="circle">
            Circle
        </Button>
    </Fragment>
);

export const Size = (): JSX.Element => (
    <Fragment>
        <Button size="small">
            Small
        </Button>
        <Button size="medium">
            Medium
        </Button>
        <Button size="large">
            Large
        </Button>
    </Fragment>
);

export const Variant = (): JSX.Element => (
    <Fragment>
        <Button variant="primary">
            Primary
        </Button>
        <Button variant="secondary">
            Secondary
        </Button>
    </Fragment>
)
