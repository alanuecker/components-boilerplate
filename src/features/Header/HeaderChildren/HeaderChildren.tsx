import React from 'react';

import { Button, ButtonTheme } from '../../../components/Button';
import { DropdownExample } from '../DropdownExample';

import classes from './style.module.scss';

interface Props {
  small?: boolean;
}

/**
 * Children of HeaderContainer used in Header.
 */
export const HeaderChildren: React.FC<Props> = ({ small }) => {
  return (
    <>
      <div className={classes.menu}>
        <DropdownExample small={small} />
      </div>
      <div className={classes.buttons}>
        <Button theme={ButtonTheme.Secondary}>Secondary Button</Button>
        <Button theme={ButtonTheme.Primary}>Primary Button</Button>
      </div>
    </>
  );
};
