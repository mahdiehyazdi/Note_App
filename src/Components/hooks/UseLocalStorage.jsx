import { useEffect, useReducer, useState } from "react";

export default function UseLocalStorage({ key, Note, initial }) {
    const [value, setValue] = useReducer(Note, initial, () => {
        return JSON.parse(localStorage.getItem(key)) || initial;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
}

export function UseLocalStorageTheme({ key, initial }) {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initial;
    });
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);
    return [value, setValue];
}
