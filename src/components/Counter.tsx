import React, { useState } from "react";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
          Increment
        </button>
        <p>
          {count}
        </p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          >
          Decrement
        </button>
      </div>
      <div>
        <input 
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
          />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          >
          Add amount
        </button>
      </div>
    </div>
  )
}