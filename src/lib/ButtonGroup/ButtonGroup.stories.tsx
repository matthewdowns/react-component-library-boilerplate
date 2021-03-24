import { Meta } from '@storybook/react';
import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';
import ButtonGroupProps from './ButtonGroup.props';

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        block: {
            control: {
                type: 'boolean'
            },
            defaultValue: false
        },
        shape: {
            control: {
                type: 'inline-radio',
                options: ['square', 'round', 'circle']
            },
            defaultValue: 'square'
        },
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonGroupProps>;

const Template = ({ children, ...rest }: ButtonGroupProps) => (
    <ButtonGroup {...rest}>
        {children}
    </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <Button key="button-1">
                Button 1
            </Button>
            <Button key="button-2">
                Button 2
            </Button>
            <Button key="button-3">
                Button 3
            </Button>
        </>
    )
}

export const MixedVariants = Template.bind({});
MixedVariants.args = {
    children: (
        <>
            <Button key="button-1" variant="primary">
                Button 1
            </Button>
            <Button key="button-2" variant="secondary">
                Button 2
            </Button>
            <Button key="button-3" variant="primary">
                Button 3
            </Button>
        </>
    )
}
