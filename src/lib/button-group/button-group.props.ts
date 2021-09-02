import { ReactElement } from 'react';
import { ButtonProps } from '../button';

interface ButtonGroupProps extends Partial<Omit<HTMLDivElement, 'children'>> {
    children?: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
    block?: boolean;
    shape?: 'square' | 'round' | 'circle';
    'data-testid'?: string;
}

export default ButtonGroupProps;
