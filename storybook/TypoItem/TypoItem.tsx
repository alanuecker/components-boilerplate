import React from 'react';

import classNames from 'classnames';

import { CopyButton } from '../CopyButton';

import classes from './style.module.scss';

interface Props {
  title: string;
  value: string;
  sassValue: string;
}

export const TypoItem: React.FC<Props> = ({ title, value, sassValue }) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classNames(value)}>{title}</div>
        <div
          className={classNames(
            classes.container__line,
            'typo-paragraph-small',
          )}
        >
          {value}
          <CopyButton value={value} />
        </div>
        <div
          className={classNames(
            classes.container__line,
            'typo-paragraph-small',
          )}
        >
          {sassValue}
          <CopyButton value={sassValue} />
        </div>
      </div>
    </div>
  );
};
