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
    call: '#62E45A',
    check: '#62E45A',
    fold: '#0A92CF',
    text: {
      main: '#f4f4f4',
      unsetRange: '#616161',
    },
  },
});
