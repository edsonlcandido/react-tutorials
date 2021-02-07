import Head from 'next/head'
const baseUrl = "/advanced-guide-demo"

export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - Advanced Guide Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li><a href={`${baseUrl}/context`}>Context</a></li>
        <li>Lifecycle Demo</li>
        <li>Advanced Guide Demo</li>
        <li>React hooks</li>
      </ul>
    </>
  )
}