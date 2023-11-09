import React, { useState } from "react";
import { UseTheme } from "./context/ThemeProvider";
import { UseNotesDispach } from "./context/NoteProvider";
import Grid from "@mui/material/Grid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AddNewNote() {
    const { theme } = UseTheme();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [colorTag, setColorTag] = useState("");
    const [isColorTag, setIsColorTag] = useState(false);
    const dispatch = UseNotesDispach();
    const onAddNote = (newNotes) => {
        dispatch({ type: "Add", payload: newNotes });
    };
    const handelSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) return null;

        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
            tag,
            colorTag,
        };
        onAddNote(newNote);
        setTitle("");
        setDescription("");
        setTag("");
        setColorTag("");
        setIsColorTag(false);
    };
    const handletextEara = (e) => {
        if (e.keyCode == 13 && !e.shiftKey) {
            e.preventDefault();
        }
    };

    return (
        <form className="addnote" name="form" onSubmit={handelSubmit}>
            <div className="addnote__star">
                <Grid xs={11} item>
                    <label className={"lable " + theme}>Title Note</label>
                    <input className={"input " + theme} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add Your Title Note" />
                </Grid>
                <Grid xs={1} item>
                    <span>*</span>
                </Grid>
            </div>
            <div className="addnote__star">
                <Grid xs={11} item>
                    <label className={"lable " + theme}>Note Description</label>
                    <textarea
                        className={"input " + theme}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyDown={handletextEara}
                        rows="15"
                        cols="40"
                        placeholder="Add Your Note Description"
                    />
                </Grid>
                <Grid xs={1} item>
                    <span>*</span>
                </Grid>
            </div>
            <div className="addnote__star">
                <Grid xs={11} item>
                    <label className={"lable " + theme}>Select tag</label>
                    <input onChange={(e) => setTag(e.target.value)} onClick={() => setIsColorTag(false)} value={tag} className={"input " + theme} type="text" placeholder="Enter your Tag name" />
                </Grid>
                <Grid xs={1} item>
                    <span></span>
                </Grid>
            </div>
            <div className="addnote__star" style={{ opacity: tag.length ? "1" : "0.5", pointerEvents: tag.length ? "all" : "none" }}>
                <Grid xs={11} item id="addnote__theme">
                    <label className={"lable " + theme}>Select theme</label>
                    <Grid xs={12} item onClick={() => setIsColorTag(!isColorTag)} className={"theme__input " + theme}>
                        {!colorTag || !tag.length ? (
                            <p>please select a color for your tag</p>
                        ) : (
                            <div className="theme__input__title">
                                <p>{colorTag.nameColor}</p>
                                <div className="theme__input__option__color" style={{ backgroundColor: colorTag.colorCode }}></div>{" "}
                            </div>
                        )}
                        <ChevronDownIcon className="theme__input__option__icon" style={{ rotate: isColorTag ? "180deg" : "0deg" }} />
                    </Grid>
                    <TagsColor isColorTag={isColorTag} setIsColorTag={setIsColorTag} setColorTag={setColorTag} />
                </Grid>
                <Grid xs={1} item>
                    <span></span>
                </Grid>
            </div>
            <button type="submit" className="button">
                Add New Note
            </button>
        </form>
    );
}

function TagsColor({ isColorTag, setColorTag, setIsColorTag }) {
    const tagColors = [
        {
            id: 1,
            nameColor: "Blue",
            colorCode: "#99DADA",
            fontColor: "#143E71",
        },
        {
            id: 2,
            nameColor: "Purple",
            colorCode: "#AE99DA",
            fontColor: "#61329C",
        },
        {
            id: 3,
            nameColor: "Yellow",
            colorCode: "#E7F29E",
            fontColor: "#637013",
        },
        {
            id: 4,
            nameColor: "Green",
            colorCode: "#A2DA99",
            fontColor: "#094813",
        },
    ];
    return (
        <div className="addnote__star theme__input__option" style={{ opacity: isColorTag ? "1" : "0", height: isColorTag ? "auto" : "0px" }} onClick={() => setIsColorTag(false)}>
            {tagColors.map((colors) => (
                <div className="theme__input__option__item" key={colors.id} onClick={() => setColorTag(colors)}>
                    <p>{colors.nameColor}</p>
                    <div className="theme__input__option__color" style={{ backgroundColor: colors.colorCode }}></div>
                </div>
            ))}
        </div>
    );
}
