import Head from 'next/head'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default function Index() {
    return (
      <>
        <Head>
          <title>React Tutorials - Lifecycle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ComponentA/>
      </>
    )
  }