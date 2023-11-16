import React, { useRef } from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';
import { useHeaderEvents } from './useHeaderEvents';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const HeaderWrapper: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const { handleKeyDown, handleBlur } = useHeaderEvents(wrapperRef);

  return (
    <nav
      {...props}
      ref={wrapperRef}
      className={classNames(className, classes.root)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {children}
    </nav>
  );
};
