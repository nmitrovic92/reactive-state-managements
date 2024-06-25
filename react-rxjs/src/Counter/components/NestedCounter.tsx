import { useCounter } from '../signals';

const NestedCounter = () => {
  const counter = useCounter()
  console.log("NestedCounter re-render");

  return (
    <div>NestedCounter {counter}</div>
  )
}

export default NestedCounter