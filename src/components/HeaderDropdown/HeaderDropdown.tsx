import React, { useContext, useEffect } from 'react';

import {
  Disclosure,
  DisclosureContent,
  useDisclosureStore,
} from '@ariakit/react';
import classNames from 'classnames';

import Chevron from '../../assets/images/navigation-dropdown-chevron.svg?react';
import { HeaderMenuContext } from '../../context/HeaderMenuContext';
import { ButtonTheme } from '../Button';

import classes from './style.module.scss';

interface Props {
  title: string;
  'aria-label'?: string;
  // this is a debug value to keep the dropdown open in Storybook
  open?: boolean;
  small?: boolean;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

export const HeaderDropdown: React.FC<Props> = ({
  title,
  'aria-label': ariaLabel,
  open,
  small,
  className,
  buttonClassName,
  contentClassName,
  children,
}) => {
  const { smallScreen } = useContext(HeaderMenuContext);
  const disclosure = useDisclosureStore();
  const disclosureOpen = disclosure.useState('open');

  const handleMouseLeave = () => {
    if (!disclosureOpen) {
      disclosure.hide();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!disclosureOpen) {
      disclosure.show();
    } else {
      disclosure.hide();
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    // used for global keyboard events
    window.addEventListener('imgly-header-disclosure-close', handleMouseLeave, {
      signal: controller.signal,
    });

    if (open) {
      disclosure.show();
    } else if (!open && typeof open === 'boolean') {
      disclosure.hide();
    }

    return () => {
      controller.abort();
    };
  }, [open, disclosure, handleMouseLeave]);

  return (
    <div
      className={className}
      onMouseLeave={smallScreen ? undefined : handleMouseLeave}
    >
      <Disclosure
        className={classNames(
          buttonClassName,
          classes.button,
          classes[`button__is_${ButtonTheme.Text}`],
          {
            [classes.button__open]: disclosureOpen,
            [classes.button__is_small]: small,
          },
        )}
        aria-label={ariaLabel}
        store={disclosure}
        onClick={handleClick}
      >
        <span className={classes.button__content}>{title}</span>
        <Chevron
          className={classNames(classes.icon, {
            [classes.icon__is_small]: small,
          })}
        />
      </Disclosure>
      <DisclosureContent
        store={disclosure}
        className={classNames(contentClassName, classes.content)}
      >
        <div className={classes.container}>{children}</div>
      </DisclosureContent>
    </div>
  );
};
