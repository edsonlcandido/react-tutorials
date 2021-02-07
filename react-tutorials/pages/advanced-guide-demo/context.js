import Head from 'next/head'
import SendMessage from './components/SendMessage'
import Messages from './components/Messages'
import {CounterProvider} from './components/counterContext'


export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - Context</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CounterProvider>
      <header>
            <nav>
                <Messages /> 
            </nav>          
      </header>
      <section>
            Conteudo
                <SendMessage /> 
      </section>
      </CounterProvider>
    </>
  )
}
