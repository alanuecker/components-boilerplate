import React from 'react';

import { Button, ButtonTheme } from '../../../components/Button';
import { DropdownExample } from '../DropdownExample';

import classes from './style.module.scss';

/**
 * Children of HeaderMenu used in Header.
 */
export const HeaderMenuChildren: React.FC = () => {
  return (
    <>
      <div className={classes.menu}>
        <DropdownExample />
      </div>
      <div className={classes.buttons}>
        <Button theme={ButtonTheme.Secondary}>Secondary Button</Button>
        <Button theme={ButtonTheme.Primary}>Primary Button</Button>
      </div>
    </>
  );
};
