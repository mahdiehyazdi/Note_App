import React, { useState } from "react";

export default function AddNewNote() {
    const [title, setTitel] = useState("");
    const [description, setDescription] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTitel("");
        setDescription("");
    };

    return (
        <form className="addnote" onSubmit={handelSubmit}>
            <div>
                <label>Title Note</label>
                <input value={title} onChange={(e) => setTitel(e.target.value)} type="text" placeholder="Add Your Title Note" />
            </div>
            <div>
                <label>Note Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="15" cols="40" placeholder="Add Your Note Description" />
            </div>
            <button type="submit" className="button">
                Add New Note
            </button>
        </form>
    );
}
