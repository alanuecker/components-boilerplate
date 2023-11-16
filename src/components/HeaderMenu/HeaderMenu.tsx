import React, { useEffect, useRef, useState } from 'react';

import {
  Disclosure,
  DisclosureContent,
  useDisclosureStore,
} from '@ariakit/react';
import classNames from 'classnames';

import { HeaderMenuContext } from '../../context/HeaderMenuContext';
import { ButtonTheme } from '../Button';
import { List } from '../List';

import classes from './style.module.scss';

interface Props {
  small?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A menu for smaller screens that will handle both children of `HeaderMenuChildren`.
 */
export const HeaderMenu: React.FC<Props> = ({ small, className, children }) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [hide, setHide] = useState<boolean | null>(null);
  const disclosure = useDisclosureStore();
  const menuOpen = disclosure.useState('open');

  useEffect(() => {
    const clickController = new AbortController();
    const blurController = new AbortController();

    window.addEventListener(
      'click',
      event => {
        if (
          menuRef?.current &&
          !menuRef.current.contains(event.target as Node) &&
          menuOpen
        ) {
          disclosure.hide();
        }
      },
      { signal: clickController.signal },
    );

    window.addEventListener(
      'blur',
      event => {
        if (
          menuRef?.current &&
          !menuRef.current.contains(event.relatedTarget as Node) &&
          menuOpen
        ) {
          disclosure.hide();
        }
      },
      { signal: blurController.signal },
    );

    return () => {
      clickController.abort();
      blurController.abort();
    };
  }, [menuRef, disclosure, menuOpen]);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'header-menu-close',
      () => {
        disclosure.hide();
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [disclosure]);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'resize',
      () => {
        setHide(window.innerWidth > 991);
      },
      {
        signal: controller.signal,
      },
    );

    if (hide === null) {
      setHide(window.innerWidth > 991);
    }

    return () => {
      controller.abort();
    };
  }, [hide, setHide]);

  if (hide) {
    return null;
  }

  return (
    <div ref={menuRef} className={classNames(className, classes.root)}>
      <Disclosure
        store={disclosure}
        className={classNames(
          classes.button,
          classes[`button__is_${ButtonTheme.Text}`],
          {
            [classes.button__open]: menuOpen,
            [classes.button__is_small]: small,
          },
        )}
      />
      <DisclosureContent store={disclosure} className={classes.popover}>
        <List className={classes.container}>
          <HeaderMenuContext.Provider value={{ smallScreen: !hide }}>
            {children}
          </HeaderMenuContext.Provider>
        </List>
      </DisclosureContent>
    </div>
  );
};
