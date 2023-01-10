import Head from 'next/head'
import styled from '@emotion/styled'
// import { Inter } from '@next/font/google' // 사용할 때 주석 해제

// const inter = Inter({ subsets: ['latin'] })

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`

export default function Home() {
  const test = () => '3'
  test()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapper />
    </>
  )
}
