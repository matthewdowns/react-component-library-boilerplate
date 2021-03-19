import { ReactNode } from 'react';

interface ButtonProps extends Partial<Pick<HTMLButtonElement, 'id' | 'disabled' | 'name'>> {
    children?: ReactNode;
    size?: 'small' | 'large';
    'data-testid'?: string;
}

export default ButtonProps;
