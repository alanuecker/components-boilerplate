import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

type Props = React.ComponentPropsWithoutRef<'ul'>;

export const List: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <ul {...rest} className={classNames(className, classes.root)}>
      {children}
    </ul>
  );
};
