import { Meta } from '@storybook/react';
import React from 'react';
import Card from './Card';
import CardProps from './Card.props';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        'data-testid': {
            table: {
                disable: true
            }
        }
    }
} as Meta<CardProps>;

const Template = ({ children, ...rest }: CardProps) => (
    <Card {...rest}>
        {children}
    </Card>
);

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lacus eu massa efficitur dapibus ac et leo. Maecenas a nulla enim. Sed commodo eros ultrices, scelerisque augue tincidunt, maximus erat. Duis suscipit nulla at nulla vulputate ultricies. Fusce tempus porta dapibus. In laoreet eros nulla, non semper metus dignissim sit amet. Suspendisse ac tristique sem, vitae placerat nisl. Etiam ac egestas sem, venenatis dictum justo. In hac habitasse platea dictumst. Praesent justo nulla, scelerisque in accumsan eu, porta ac risus. Praesent sed leo nibh. Fusce finibus vulputate sapien, ac congue libero volutpat vitae.
        </>
    )
}

export const Title = Template.bind({});
Title.args = {
    children: (
        <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lacus eu massa efficitur dapibus ac et leo. Maecenas a nulla enim. Sed commodo eros ultrices, scelerisque augue tincidunt, maximus erat. Duis suscipit nulla at nulla vulputate ultricies. Fusce tempus porta dapibus. In laoreet eros nulla, non semper metus dignissim sit amet. Suspendisse ac tristique sem, vitae placerat nisl. Etiam ac egestas sem, venenatis dictum justo. In hac habitasse platea dictumst. Praesent justo nulla, scelerisque in accumsan eu, porta ac risus. Praesent sed leo nibh. Fusce finibus vulputate sapien, ac congue libero volutpat vitae.
        </>
    ),
    title: 'Title'
}
