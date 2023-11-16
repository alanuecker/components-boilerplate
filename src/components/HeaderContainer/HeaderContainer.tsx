import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { List } from '../List';

import classes from './style.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

/**
 * A container that will handle the positioning of both children of `HeaderChildren`.
 */
export const HeaderContainer: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  const [hide, setHide] = useState<boolean | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'resize',
      () => {
        setHide(window.innerWidth < 991);
      },
      {
        signal: controller.signal,
      },
    );

    if (hide === null) {
      setHide(window.innerWidth < 991);
    }

    return () => {
      controller.abort();
    };
  }, [hide, setHide]);

  if (hide) {
    return null;
  }

  return (
    <List {...props} className={classNames(className, classes.root)}>
      {children}
    </List>
  );
};
