'use client';

import { createContext } from 'react';
import defaultTheme from './defaultTheme';

export default createContext({
  providerIsMissing: true,
  modifyElement: null,
  theme: defaultTheme,
  changeTheme() {},
  getColor() {},
});
