import Head from 'next/head'
import Greet from '../components/Greet'
import Welcome from '../components/Welcome'

export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - meus estudos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greet />
      <Welcome />
    </>
  )
}
