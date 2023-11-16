import React from 'react';

import classNames from 'classnames';

import { Button } from '../../../components/Button';
import { HeaderDropdown } from '../../../components/HeaderDropdown';
import { List } from '../../../components/List';
import { ListItem } from '../../../components/ListItem';
import { Links } from '../../../utils/constants';
import { DropdownExampleItem } from '../DropdownExampleItem';

import classes from './style.module.scss';

interface Props {
  open?: boolean;
  small?: boolean;
  buttonClassName?: string;
}

export const DropdownExample: React.FC<Props> = ({
  open,
  small,
  buttonClassName,
}) => {
  return (
    <ListItem>
      <HeaderDropdown
        buttonClassName={buttonClassName}
        contentClassName={classNames(classes.content, {
          [classes.content__is_small]: small,
        })}
        aria-label="An example dropdown menu"
        title="DropdownExample"
        open={open}
        small={small}
      >
        <List className={classes.container}>
          {Object.values(Links.GuidesDeveloperLinks).map(docs => {
            const items = docs.map(({ name, url }) => {
              if (!url) {
                return (
                  <div key={name} className={classNames(classes.heading)}>
                    {name}
                  </div>
                );
              }
              return <DropdownExampleItem key={name} name={name} url={url} />;
            });

            return (
              <div key={docs[0].name} className={classes.column}>
                {items}
              </div>
            );
          })}
          <div className={classes.support}>
            <div className={classes.support__text}>
              Didn&apos;t find the answers you were looking for?
            </div>
            <ListItem>
              <Button render={<a />} href={Links.Support.url}>
                {Links.Support.name}
              </Button>
            </ListItem>
          </div>
        </List>
      </HeaderDropdown>
    </ListItem>
  );
};
