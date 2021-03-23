import { ReactNode } from 'react';

interface ButtonProps extends Partial<Pick<HTMLButtonElement, 'id' | 'disabled' | 'name'>> {
    block?: boolean;
    children?: ReactNode;
    shape?: Shape;
    size?: Size;
    type?: 'flat' | 'raised' | 'hollow';
    variant?: Variant;
    'data-testid'?: string;
}

export default ButtonProps;
