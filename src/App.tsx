import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

function App() {
  
  return (
  <>
  <Heading title={'Hello Heading'} />
  <Section title='NEW SECTION'><h3>This is my section</h3></Section>
  <Counter />
  <List items={["coffee", "tacos", "code"]} render = {(item: string)=><span className='gold'>{item}</span>} />
  </>
  )
}

export default App
