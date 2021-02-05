import Head from 'next/head'
import NameList from '../../components/NameList'

export default function Index() {
    return (
      <>
        <Head>
          <title>React Tutorials - NameList</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NameList/>
      </>
    )
  }