import React, { useState } from "react";
import AddNewNote from "./AddNewNote";
export default function NoeteBody() {
    return (
        <div>
            <Sort />
            <div className="filter">
                <h2>Add New Note!</h2>
                <Filter filterItem="filter__item" />
            </div>
            <div className="notebody__lists">
                <AddNewNote />
                <NoteList />
            </div>
        </div>
    );
}

function Sort() {
    return (
        <div className="notebody">
            <div className="sort__select">
                <img src="/Svg/sort.svg" />
                <select className="sort" defaultValue="sortNote">
                    <option value="sortNote" disabled>
                        Sort Note
                    </option>
                    <option value="Latest">Latest</option>
                    <option value="Earliest">Earliest</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
        </div>
    );
}

function Filter(props) {
    return (
        <div className={props.filterItem}>
            <div>
                <p>All</p>
                <span>2</span>
            </div>
            <div>
                <p>Comleted</p>
                <span>1</span>
            </div>
            <div>
                <p>Open</p>
                <span>1</span>
            </div>
            {/* <div className="notnote">
                <img src="/Svg/danger.svg" />
                <h4> No Notes has already been added :)</h4>
            </div> */}
        </div>
    );
}

function NoteList() {
    return (
        <div className="notelist">
            <Filter filterItem="filter__item__res" />
            <div className="notelist__items">
                <div className="notlist__item">
                    <div>
                        <h4>Note 2</h4>
                        <p>Note 2 Description</p>
                    </div>
                    <div className="notlist__item__action">
                        <img src="/Svg/remove.svg" />
                        <input type="checkbox" />
                    </div>
                </div>
                <label>August 11, 2023</label>
            </div>
            <div className="notelist__items">
                <div className="notlist__item">
                    <div>
                        <h4>Note 2</h4>
                        <p>Note 2 Description</p>
                    </div>
                    <div className="notlist__item__action">
                        <img src="/Svg/remove.svg" />
                        <input type="checkbox" />
                    </div>
                </div>
                <label>August 11, 2023</label>
            </div>
        </div>
    );
}
