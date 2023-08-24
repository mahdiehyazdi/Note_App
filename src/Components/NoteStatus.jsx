import React from "react";
import Messages from "./Messages";

export default function NoteStatus({ filterItem, notes }) {
    const allNotes = notes.length;
    const completedNote = notes.filter((n) => n.completed).length;
    const unCompletedNote = allNotes - completedNote;
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
                <Messages text="No Notes has already been added :)">
                    <img src="/Svg/danger.svg" />
                </Messages>
            )}
        </div>
    );
}
