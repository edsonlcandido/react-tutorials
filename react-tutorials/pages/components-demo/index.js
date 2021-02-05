import Head from 'next/head'
import Greet from '../../components/Greet'
import Welcome from '../../components/Welcome'
import Message from '../../components/Message'
import Counter from  '../../components/Counter'
import FunctionClick from '../../components/FunctionClick'
import ClassClick from  '../../components/ClassClick'
import {EventBinding} from '../../components/EventBinding'
import ParentComponent from '../../components/ParentComponent'
import UserGreeting from '../../components/UserGreting'
import NameList from '../../components/NameList'

const baseUrl = "/components-demo"

export default function Index() {
  return (
    <>
      <Head>
        <title>React Tutorials - meus estudos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li><a href={`${baseUrl}/usergreeting`}>User Greeting</a></li>
        <li><a href={`${baseUrl}/namelist`}>Name List</a></li>
      </ul>      
      
      {/* <Greet name="Bruce" heroName="batman">
        <p>Children in a functional component</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="superman"/> */}
      {/* <Greet name="Diana" heroName="wonderwoman"/> */}
      {/* <Welcome name="Hal Jordan" heroName="green lantern">
        <p>Children in a class component</p>   
      </Welcome> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBinding/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
    </>
  )
}
