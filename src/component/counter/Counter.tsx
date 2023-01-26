import React from 'react'

import {useAppSelector, useAppDispatch} from '../../utils/hooks'
import {decrement, increment} from "./counterSlice";

const Counter = () => {
    const count = useAppSelector(state => state.counter.value)

    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;