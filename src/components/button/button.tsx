import React, { MouseEvent } from 'react';
import cn from 'classnames';

import styles from './button.module.css';

type ButtonProps = {
  className?: string;
  icon?: any;
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'outlined' | 'contained';
};

export default function Button({
  children,
  icon: Icon,
  className,
  variant = 'contained',
  onClick
}: ButtonProps) {
  return (
    <button className={cn(styles.button, styles[variant], className)} onClick={onClick}>
      {Boolean(Icon) && <Icon />}
      {children}
    </button>
  );
}
