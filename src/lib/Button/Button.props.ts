import { ReactNode } from 'react';

interface ButtonProps extends Partial<Pick<HTMLButtonElement, 'id' | 'className' | 'name' | 'disabled'>> {
    children?: ReactNode;
    block?: boolean;
    hollow?: boolean;
    shape?: 'square' | 'round' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    'data-testid'?: string;
}

export default ButtonProps;
