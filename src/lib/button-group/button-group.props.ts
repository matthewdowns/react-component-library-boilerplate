import { ReactElement } from 'react';
import ButtonProps from '../button/button.props';

interface ButtonGroupProps extends Partial<Omit<HTMLDivElement, 'children'>> {
    children?: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
    block?: boolean;
    shape?: 'square' | 'round' | 'circle';
    'data-testid'?: string;
}

export default ButtonGroupProps;
