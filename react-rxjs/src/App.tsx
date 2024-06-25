import { Subscribe } from '@react-rxjs/core'
import Title from './Counter/components/Title'
import { setCounter, useCounter } from './Counter/signals/index'
import BasicCounter from './Counter/components/BasicCounter'
import Wrappper from './Counter/components/Wrapper'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const counter = useCounter()
  console.log('App rendered')

  return (
    <Subscribe>
      <div className="container">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>React Legend State</h1>
        Current count: {counter}
        <div className="card">
          <button onClick={() => setCounter(counter + 1)}>
            Add count
          </button>
        </div>
        <Title text="React RxJS" />
        <BasicCounter />
        <Wrappper />
      </div>
    </Subscribe>
  )
}

export default App
