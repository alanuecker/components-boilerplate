import React from 'react';

import classNames from 'classnames';

import Logo from '../../assets/images/logo.svg?react';
import { Links } from '../../utils/constants';

import classes from './style.module.scss';

interface Props {
  small?: boolean;
  className?: string;
}

export const HeaderLogo: React.FC<Props> = ({ small, className, ...props }) => {
  return (
    <a
      {...props}
      className={classNames(className, classes.root, {
        [classes.root__is_small]: small,
      })}
      href={Links.Storybook.url}
      aria-label="Go to the main page"
    >
      <Logo aria-label="Logo" />
    </a>
  );
};
