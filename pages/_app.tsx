import type { AppProps } from 'next/app';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Global } from '@emotion/react';
import globalStyles from '../styles/globalstyles';
import Header from '../components/gnb/templates/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Global styles={globalStyles} />
          <Header />
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}
