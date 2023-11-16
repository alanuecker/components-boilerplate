import React from 'react';

import classes from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

export const ColorPalette: React.FC<Props> = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};
