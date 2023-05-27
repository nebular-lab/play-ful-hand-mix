import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#121212',
    unsetRange: '#3f3f3f',
    main: '#1e1e1e',
    raise: '#B90069',
    betL: '#72008D',
    betM: '#D91D43',
    betS: '#F06200',
    call: '#5AB966',
    check: '#5AB966',
    fold: '#0A92CF',
    allin: '#e6b422',
    preflop: '#e6b422',
    card: {
      d: '#283AC4',
      s: '#4F4F4F',
      c: '#08AB27',
      h: '#8B0901',
    },
    accentOrange: '#F06200',
    text: {
      main: '#f4f4f4',
      unsetRange: '#616161',
    },
  },
});
