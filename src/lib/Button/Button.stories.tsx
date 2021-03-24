/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta } from '@storybook/react';
import React from 'react';
import Button from './Button';
import ButtonProps from './Button.props';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text'
            }
        },
        block: {
            control: {
                type: 'boolean'
            },
            defaultValue: false
        },
        hollow: {
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
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'medium', 'large']
            },
            defaultValue: 'medium'
        },
        variant: {
            control: {
                type: 'inline-radio',
                options: ['primary', 'secondary']
            },
            defaultValue: 'primary'
        },
        'data-testid': {
            table: {
                disable: true
            }
        }
    },
    parameters: {
        actions: {
            handles: ['click']
        }
    }
} as Meta<ButtonProps>;

const Template = ({ children, ...rest }: ButtonProps) => (
    <Button {...rest}>
        {children}
    </Button>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Button'
}
