import React, { useState } from "react";
import AddNewNote from "./AddNewNote";
import NoteStatus from "./NoteStatus";
import Sort from "./Sort";
import Landing from "./Landing";
import Checkbox from "@mui/material/Checkbox";
import { UseTheme } from "./context/ThemeProvider";
import { UseNewNotes, UseNotesDispach } from "./context/NoteProvider";
import Grid from "@mui/material/Grid";
import SearchImg from "../../public/Svg/SearchImg";
import TagIcon from "../../public/Svg/TagIcon";
import Messages from "./Messages";
import Danger from "../../public/Svg/Danger";

export default function NoeteBody() {
    const { theme } = UseTheme();
    const [sortNotes, setSortNotes] = useState("sortNote");
    const [serachBox, setSearchBox] = useState("");

    return (
        <div>
            <Landing />
            <Grid container className={"filter " + theme}>
                <Grid item xs={12} sm={3}>
                    <h2>Add New Note!</h2>
                </Grid>
                <Grid xs={8} item className="sort__search__box">
                    <Grid xs={5} item>
                        <NoteStatus filterItem={"filter__item " + theme} />
                    </Grid>
                    <Grid xs={5} item className="filter__item">
                        <Sort sortNotes={sortNotes} onSort={(e) => setSortNotes(e.target.value)} />
                        <SearchBox onSerach={(e) => setSearchBox(e.target.value)} serachBox={serachBox} theme={theme} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="notebody__lists">
                <Grid item xs={12} md={4} sm={5}>
                    <AddNewNote />
                </Grid>
                <Grid item xs={12} md={8} sm={7}>
                    <NoteList sortNotes={sortNotes} serachBox={serachBox} />
                </Grid>
            </Grid>
        </div>
    );
}

function SearchBox({ onSerach, serachBox, theme }) {
    return (
        <div className="searchbox__input">
            <SearchImg fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
            <input type="text" placeholder="Search Notes ..." className={"search " + theme} value={serachBox} onChange={onSerach} />
        </div>
    );
}

function NoteList({ sortNotes, serachBox }) {
    const note = UseNewNotes();
    const { theme } = UseTheme();

    const notes = [...note].filter((s) => {
        return `${s.title.toLowerCase()} ${s.description.toLowerCase()}`.includes(serachBox.toLowerCase());
    });
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
        <React.Fragment>
            {!note.lenght ? (
                <div className="notelist">
                    <NoteStatus filterItem={"filter__item__res " + theme} />
                    <Grid xs={12} item className={"filter__item__res " + theme}>
                        <Sort sortNotes={sortNotes} onSort={(e) => setSortNotes(e.target.value)} />
                        <SearchBox onSerach={(e) => setSearchBox(e.target.value)} serachBox={serachBox} theme={theme} />
                    </Grid>
                    <Grid container>
                        {sortedNotes.map((note) => (
                            <Grid xs={6} item key={note.id}>
                                <NoteItem note={note} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <Messages text="Add Your Note and Enjoy!">
                    <Danger />
                </Messages>
            )}
        </React.Fragment>
    );
}

function NoteItem({ note }) {
    const { theme } = UseTheme();
    const dispatch = UseNotesDispach();
    const options = {
        year: "numeric",
        day: "numeric",
        month: "long",
    };

    const onCompleteNote = (e) => {
        const noteId = Number(e.target.value);
        dispatch({ type: "Complete", payload: noteId });
    };
    const onDelete = (id) => {
        dispatch({ type: "Delete", payload: id });
    };

    return (
        <div>
            <div className={"notlist__item " + theme}>
                <div className="notelist__item__header">
                    <span style={{ backgroundColor: !note.completed ? note.colorTag.colorCode : "var(--slate-100)", color: !note.completed ? note.colorTag.fontColor : "var(--slate-600)" }}>
                        {note.tag}
                        <TagIcon fill={!note.completed ? note.colorTag.fontColor : "var(--slate-600)"} />
                    </span>
                    <div className="notlist__item__action">
                        <img src="/Svg/remove.svg" onClick={(id) => onDelete(note.id)} />
                        <Checkbox
                            checked={note.completed}
                            value={note.id}
                            onChange={onCompleteNote}
                            sx={{
                                color: theme
                                    ? {
                                          color: "var(--slate-25)",
                                      }
                                    : {
                                          color: "var(--slate-600)",
                                      },
                                "&:hover": { bgcolor: "transparent" },
                                "&.Mui-checked": {
                                    color: "var(--green-600)",
                                },
                            }}
                        />
                    </div>
                </div>
                <div className={!note.completed ? "" : "notlist__item__completed"}>
                    <h4>{note.title}</h4>
                    <span>{note.description}</span>
                </div>
                <label className={"lable " + theme}>{new Date(note.createdAt).toLocaleDateString("en-Us", options)}</label>
            </div>
        </div>
    );
}
