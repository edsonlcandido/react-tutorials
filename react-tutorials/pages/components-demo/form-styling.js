import Head from 'next/head'
import FormStyling from '../../components/FormStyling'

export default function Index() {
    return (
      <>
        <Head>
          <title>React Tutorials - UserGretting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FormStyling/>       
      </>
    )
  }