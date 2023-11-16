import React, { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';

import { ListItem } from '../../../components/ListItem';

import classes from './style.module.scss';

interface Props extends ComponentPropsWithoutRef<'a'> {
  name: string;
  url: string;
  small?: boolean;
}

export const DropdownExampleItem: React.FC<Props> = ({
  name,
  url,
  small,
  className,
  children,
  ...props
}) => {
  return (
    <ListItem>
      <a
        {...props}
        className={classNames(className, classes.root, {
          [classes.root__is_small]: small,
        })}
        href={url}
      >
        {name}
        {children}
      </a>
    </ListItem>
  );
};
