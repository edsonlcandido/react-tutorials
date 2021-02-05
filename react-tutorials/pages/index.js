import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - meus estudos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li><a href="/components-demo">Components Demo</a></li>
        <li>Advanced Guide Demo</li>
        <li>Lifecycle Demo</li>
      </ul>
    </>
  )
}
