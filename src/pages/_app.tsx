import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

import { theme } from '@/theme';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}
