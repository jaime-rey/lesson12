import './App.css'
import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'
import { useState, useEffect, useCallback, useMemo, useRef , MouseEvent, KeyboardEvent } from 'react'


interface User{
  id: number,
  username: string
}

type fibFunc = (n: number) =>number

const fib: fibFunc = (n) =>{
  if(n<2) return n
  return fib(n -1) + fib(n -2)
}

const myNum= 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)


  useEffect(()=>{
    console.log('mounting')
    console.log('Users; ', users)

    return ()=> console.log('unmounting')
  }, [users])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> |
     KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])

     const result = useMemo<number>(()=> fib(myNum),[myNum])

  return (
  <>
  <Heading title={'Hello Heading'} />
  <Section title='NEW SECTION'><h3>This is my section</h3></Section>
  <Counter />
  <List items={["coffee", "tacos", "code"]} render = {(item: string)=><span className='gold'>{item}</span>} />
   
  <div className='App'>
   <h1>{count}</h1>
   <button onClick={()=>setCount(prev => prev -1)}>Minus</button>
   <button onClick={()=>setCount(prev => prev +1)}>Add</button>
   <button onClick={addTwo}>Add two</button>
   <h2>{result}</h2>
   <input ref={inputRef} type="text"  />
  </div>
  
  </>
  )
}

export default App
