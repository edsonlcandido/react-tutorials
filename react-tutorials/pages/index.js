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
        <li><a href="/lifecycle">Lifecycle Demo</a></li>
        <li><a href="/advanced-guide-demo">Advanced Guide Demo</a></li>
        <li>React hooks</li>
      </ul>
    </>
  )
}
