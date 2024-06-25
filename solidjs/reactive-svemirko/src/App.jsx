import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
import RandomNumbers from './RandomNumbers';

function App() {
  const [first, setFirst] = createSignal(0);

  return (
    <div class={styles.App}>
      <h1>Hello, {first()}!</h1>
      <button onClick={() => setFirst(() => first() + 1)}>
        Add count
      </button>
      <RandomNumbers />
    </div>
  );
}

export default App;
