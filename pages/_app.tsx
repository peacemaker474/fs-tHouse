import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { RecoilRoot } from 'recoil'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  )
}
