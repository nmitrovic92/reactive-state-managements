import NestedCounter from "./NestedCounter"
import RandomNumbers from "./RandomNumbers"

const Wrapper = () => {
  console.log('Wrapper rendered')
  
  return (
    <div>
      Wrappper:
      <NestedCounter />
      <RandomNumbers />
    </div>
  )
}

export default Wrapper