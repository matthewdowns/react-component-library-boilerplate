import { HTMLAttributes } from 'react';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'size'> {
    block?: boolean;
    hollow?: boolean;
    shape?: 'square' | 'round' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';

    /**
     * @ignore
     */
    'data-testid'?: string;
}

export default ButtonProps;
