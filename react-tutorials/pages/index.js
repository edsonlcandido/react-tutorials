import Head from 'next/head'
import Greet from '../components/Greet'
import Welcome from '../components/Welcome'
import Message from '../components/Message'

export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - meus estudos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Greet name="Bruce" heroName="batman">
        <p>Children in a functional component</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="superman"/> */}
      {/* <Greet name="Diana" heroName="wonderwoman"/> */}
      {/* <Welcome name="Hal Jordan" heroName="green lantern">
        <p>Children in a class component</p>   
      </Welcome> */}
      <Message/>
    </>
  )
}
