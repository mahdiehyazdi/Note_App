import { createContext, useContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export function Note(state, { type, payload }) {
    switch (type) {
        case "Add": {
            return [...state, payload];
        }
        case "Delete": {
            return state.filter((n) => n.id !== payload);
        }
        case "Complete": {
            return state.map((note) => (note.id === payload ? { ...note, completed: !note.completed } : note));
        }
        default:
            throw new Error("unKnown Action" + type);
    }
}
const NotesContex = createContext(null);
const NotesContexDispach = createContext(null);

export default function NoteProvider({ children }) {
    const [newNotes, dispatch] = UseLocalStorage({ Note, key: "Note", initial: [] });

    return (
        <NotesContex.Provider value={newNotes}>
            <NotesContexDispach.Provider value={dispatch}>{children}</NotesContexDispach.Provider>
        </NotesContex.Provider>
    );
}

export const UseNewNotes = () => {
    const contexts = useContext(NotesContex);
    if (contexts === undefined) throw new Error("theme was used outside of ThemeProvider");
    return contexts;
};

export const UseNotesDispach = () => {
    const contexts = useContext(NotesContexDispach);
    if (contexts === undefined) throw new Error("theme was used outside of ThemeProvider");
    return contexts;
};
