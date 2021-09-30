import { ButtonProps as BaseButtonProps } from '@restart/ui/Button';

interface ButtonProps extends BaseButtonProps {
    block?: boolean;
    hollow?: boolean;
    shape?: 'square' | 'round' | 'circle';
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary';
    'data-testid'?: string;
}

export default ButtonProps;
