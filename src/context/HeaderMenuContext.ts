import { createContext } from 'react';

export const HeaderMenuContext = createContext<{
  smallScreen: boolean;
}>({
  smallScreen: false,
});
