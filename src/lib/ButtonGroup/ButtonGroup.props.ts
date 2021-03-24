import { ReactElement } from 'react';
import { ButtonProps } from '../Button';

interface ButtonGroupProps extends Partial<Pick<HTMLDivElement, 'id' | 'className'>> {
    children?: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
    block?: boolean;
    shape?: 'square' | 'round' | 'circle';

    'data-testid'?: string;
}

export default ButtonGroupProps;
