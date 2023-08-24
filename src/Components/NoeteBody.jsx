import React, { useState } from "react";
import AddNewNote from "./AddNewNote";
import NoteStatus from "./NoteStatus";
import Sort from "./Sort";
import Landing from "./Landing";

export default function NoeteBody() {
    const [newNotes, setNewNote] = useState([]);
    const [sortNotes, setSortNotes] = useState("sortNote");
    const [serachBox, setSearchBox] = useState("");

    const handleAddNote = (newNote) => {
        setNewNote((prevnote) => [...prevnote, newNote]);
    };
    const handleDelteNote = (id) => {
        setNewNote((prevNotes) => prevNotes.filter((n) => n.id !== id));
    };
    const handleCompletedNote = (e) => {
        const noteId = Number(e.target.value);
        setNewNote((prevNotes) => prevNotes.map((note) => (note.id === noteId ? { ...note, completed: !note.completed } : note)));
    };
    const serached = [...newNotes].filter((s) => {
        return `${s.title.toLowerCase()} ${s.description.toLowerCase()}`.includes(serachBox.toLowerCase());
    });

    return (
        <div>
            <Landing serachBox={serachBox} onSerach={(e) => setSearchBox(e.target.value)} />
            <Sort sortNotes={sortNotes} onSort={(e) => setSortNotes(e.target.value)} />
            <div className="filter">
                <h2>Add New Note!</h2>
                <NoteStatus notes={newNotes} filterItem="filter__item" />
            </div>
            <div className="notebody__lists">
                <AddNewNote onAddNote={handleAddNote} />
                <NoteList notes={serached} sortNotes={sortNotes} onDelete={handleDelteNote} onCompleteNote={handleCompletedNote} />
            </div>
        </div>
    );
}

function NoteList({ notes, onDelete, onCompleteNote, noteStatus, sortNotes }) {
    let sortedNotes = notes;
    if (sortNotes === "Earliest") {
        sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    if (sortNotes === "Latest") {
        sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    if (sortNotes === "Completed") {
        sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed));
    }
    return (
        <div className="notelist">
            <NoteStatus notes={notes} filterItem="filter__item__res" />
            {sortedNotes.map((note) => (
                <NoteItem key={note.id} note={note} onDeleteNote={onDelete} onCompleteNote={onCompleteNote} />
            ))}
        </div>
    );
}

function NoteItem({ note, onDeleteNote, onCompleteNote }) {
    const options = {
        year: "numeric",
        day: "numeric",
        month: "long",
    };
    return (
        <div className="notelist__items">
            <div className="notlist__item">
                <div className={!note.completed ? "" : "notlist__item__completed"}>
                    <h4>{note.title}</h4>
                    <p>{note.description}</p>
                </div>
                <div className="notlist__item__action">
                    <img src="/Svg/remove.svg" onClick={() => onDeleteNote(note.id)} />
                    <input type="checkbox" checked={note.completed} id={note.id} name={note.id} value={note.id} onChange={onCompleteNote} />
                </div>
            </div>
            <label>{new Date(note.createdAt).toLocaleDateString("en-Us", options)}</label>
        </div>
    );
}
