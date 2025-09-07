import { cn } from '@/utils/cn';

interface ButtonOptions {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button(
  text: string,
  options: ButtonOptions = {}
): HTMLButtonElement {
  const {
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
  } = options;

  const button = document.createElement('button');
  button.textContent = text;
  button.disabled = disabled;

  const baseClasses =
    'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  const variantClasses = {
    primary:
      'border-2 bg-primary-600 text-white hover:bg-primary-500 hover:text-primary-900 border-primary-300',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-600 focus:ring-primary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  button.className = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses
  );

  if (onClick && !disabled) {
    button.addEventListener('click', onClick);
  }

  return button;
}
