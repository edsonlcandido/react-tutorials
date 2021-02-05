import Head from 'next/head'
import UserGreeting from '../../components/UserGreting'

export default function Index() {
    return (
      <>
        <Head>
          <title>React Tutorials - UserGretting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {<UserGreeting/>}        
      </>
    )
  }