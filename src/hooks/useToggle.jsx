import { useState } from "react"

export const useToggle = (initialVal = false) => {

    // definis el state
    const [state, setState] = useState(initialVal);

    // function que consume el state -> usually mutate it
    function toggle(){
        setState((prev) => !prev)
    };

    // export function and state.
    return [state, toggle ]
}