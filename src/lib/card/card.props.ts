import {
    HTMLAttributes,
    ReactNode
} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    bodyClassName?: string;
    children?: ReactNode;
    footer?: ReactNode;
    footerClassName?: string;
    header?: ReactNode;
    headerClassName?: string;
    size?: 'small' | 'medium' | 'large';
}

export default CardProps;
