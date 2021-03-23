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

export const Disabled = (): JSX.Element => (
    <Button disabled={true}>
        Disabled
    </Button>
);

export const Size = (): JSX.Element => (
    <Fragment>
        <Button size="small">
            Small
        </Button>
        <Button>
            Medium
        </Button>
        <Button size="large">
            Large
        </Button>
    </Fragment>
)
