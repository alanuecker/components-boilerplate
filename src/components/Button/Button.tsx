import React, {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
} from 'react';

import { Button as AriakitButton } from '@ariakit/react';
import type { ButtonProps as AriakitButtonProps } from '@ariakit/react';
import classNames from 'classnames';

import classes from './style.module.scss';
import { ButtonTheme } from './types';

export interface ButtonProps
  extends Omit<Omit<AriakitButtonProps, 'as'>, 'render'> {
  /**
   * @deprecated Please use `render` instead.
   */
  as?: React.ReactNode;
  render?: React.ReactNode;
  theme?: ButtonTheme;
  small?: boolean;
  href?: string;
  to?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonBase = (
  {
    as,
    render,
    theme = ButtonTheme.Primary,
    small,
    leadingIcon,
    trailingIcon,
    className,
    children,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <AriakitButton
      ref={ref}
      {...props}
      // @ts-ignore
      render={render || as}
      className={classNames(
        className,
        classes.root,
        classes[`root__is_${theme}`],
        {
          [classes.root__is_small]: small,
          [classes.root__is_icon_button]:
            !children && (leadingIcon || trailingIcon),
        },
      )}
    >
      <React.Fragment key="leadingIcon">{leadingIcon}</React.Fragment>
      {children && (
        <span key="children" className={classes.root__content}>
          {children}
        </span>
      )}
      <React.Fragment key="trailingIcon">{trailingIcon}</React.Fragment>
    </AriakitButton>
  );
};

export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> & RefAttributes<HTMLButtonElement>
> = forwardRef(ButtonBase);
