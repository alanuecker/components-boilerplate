import React from 'react';

import classNames from 'classnames';

import { CopyButton } from '../CopyButton';

import classes from './style.module.scss';

interface Props {
  title: string;
  variable: string;
  color: string;
}

export const ColorItem: React.FC<Props> = ({ title, variable, color }) => {
  return (
    <div className={classes.root}>
      <div
        className={classes.square}
        style={{ backgroundColor: `var(${variable})` }}
      ></div>
      <div className={classes.container}>
        <h4 className={classNames(classes.container__title, 'typo-h4')}>
          {title}
        </h4>
        <div
          className={classNames(
            classes.container__line,
            'typo-paragraph-small',
          )}
        >
          {variable}
          <CopyButton value={variable} />
        </div>
        <div
          className={classNames(
            classes.container__line,
            'typo-paragraph-small',
          )}
        >
          {color}
        </div>
      </div>
    </div>
  );
};
