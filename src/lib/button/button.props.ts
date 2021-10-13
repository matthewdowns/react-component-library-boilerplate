import { HTMLAttributes } from 'react';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'size'> {
    block?: boolean;
    disabled?: boolean;
    hollow?: boolean;
    shape?: 'square' | 'round' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
}

export default ButtonProps;
