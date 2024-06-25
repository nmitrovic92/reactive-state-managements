import { useCounter } from "../signals"

const BasicCounter = () => {
  const counter = useCounter()
  console.log("BasicCounter re-render");

  return (
    <div>BasicCounter {counter}</div>
  )
}

export default BasicCounter