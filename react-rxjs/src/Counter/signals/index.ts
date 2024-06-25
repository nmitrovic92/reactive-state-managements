import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { shareReplay, takeWhile } from "rxjs/operators";

// debugging
// import { create } from "rxjs-spy";
// import { tag } from "rxjs-spy/operators";

// const spy = create();
// spy.log("useCounter");

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [counterChange$, setCounter] = createSignal<number>();
const counterLimit$ = counterChange$.pipe(
    takeWhile((value) => value < 10),
)
const [useCounter] = bind(
  counterLimit$.pipe(
    // tag('useCounter'),
    shareReplay(1)
  ),
  0
);

console.log(setCounter);

export { useCounter, setCounter };
