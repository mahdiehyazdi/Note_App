import React from "react";
import Messages from "./Messages";
import { UseNewNotes } from "./context/NoteProvider";
import Danger from "../../public/Svg/Danger";
import { UseTheme } from "./context/ThemeProvider";

export default function NoteStatus({ filterItem }) {
    const notes = UseNewNotes();
    const allNotes = notes.length;
    const completedNote = notes.filter((n) => n.completed).length;
    const unCompletedNote = allNotes - completedNote;
    const { theme } = UseTheme();

    return (
        <div className={filterItem}>
            {allNotes ? (
                <React.Fragment>
                    <div>
                        <p>All</p>
                        <span>{allNotes}</span>
                    </div>
                    <div>
                        <p>Comleted</p>
                        <span>{completedNote}</span>
                    </div>
                    <div>
                        <p>Open</p>
                        <span>{unCompletedNote}</span>
                    </div>
                </React.Fragment>
            ) : (
                <Messages text="No Notes has already been added :)" danger="true">
                    <Danger fill={theme ? "var(--slate-50)" : "var(--slate-800)"} />
                </Messages>
            )}
        </div>
    );
}
