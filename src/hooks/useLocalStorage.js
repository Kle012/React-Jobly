import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue = null) => {
    const initialVal = localStorage.getItem(key) || defaultValue;
    const [state, setState] = useState(initialVal);

    useEffect(() => {
        if (state === null) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, state)
        }
    }, [key, state])

    return [state, setState];
}

export default useLocalStorage;