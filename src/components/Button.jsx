import { useReducer, useState } from 'react';

function Button() {
    // counter with useState
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
    console.log('Button rendered');

    // counter with useReducer
    const initialState = {
        count: 0,
    };
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count: state.count + 1,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button
                onClick={() =>
                    dispatch({
                        type: 'INCREMENT',
                    })
                }
            >
                Click me
            </button>
        </div>
    );
}

export default Button;
