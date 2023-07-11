
import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'

function App() {
  
  return (
  <>
  <Heading title={'Hello Heading'} />
  <Section title='NEW SECTION'><h3>This is my section</h3></Section>
  <Counter />
  </>
  )
}

export default App
