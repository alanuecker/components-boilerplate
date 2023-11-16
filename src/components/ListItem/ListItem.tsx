import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

type Props = React.ComponentPropsWithoutRef<'li'>;

export const ListItem: React.FC<Props> = ({ className, children, ...rest }) => {
  return (
    <li {...rest} className={classNames(className, classes.root)}>
      {children}
    </li>
  );
};
