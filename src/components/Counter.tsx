import classes from './Counter.module.css';
import { increment, decrement, reset, addByNumber } from '../app/counter/counter-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Counter = () => {
  
  const {value} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  const hendleIncrement = () => {
    dispatch(increment());
  }

  const hendleDecrement = () => {
    dispatch(decrement());
  }

  const hendleReset = () => {
    dispatch(reset());
  }

  const hendleAddByNumber = () => {
    dispatch(addByNumber(4));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{value}</div>
      <button onClick={hendleIncrement}>Increment</button>
      <button onClick={hendleDecrement}>Decrement</button>
      <button onClick={hendleReset}>Reset</button>
      <button onClick={hendleAddByNumber}>Add by Number</button>
    </main>
  );
};

export default Counter;
