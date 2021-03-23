import { ReactNode } from 'react';

interface ButtonProps extends Partial<Pick<HTMLButtonElement, 'id' | 'disabled' | 'name'>> {
    children?: ReactNode;
    shape?: Shape;
    size?: Size;
    'data-testid'?: string;
}

export default ButtonProps;
