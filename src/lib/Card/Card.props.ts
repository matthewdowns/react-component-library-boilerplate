import { ReactNode } from 'react';

interface CardProps extends Partial<Pick<HTMLDivElement, 'id' | 'className'>> {
    children?: ReactNode;
    title?: ReactNode;
    'data-testid'?: string;
}

export default CardProps;
