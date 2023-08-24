import React, { useState } from "react";

export default function Sort({ sortNotes, onSort }) {
    return (
        <div className="notebody">
            <div className="sort__select">
                <img src="/Svg/sort.svg" />
                <select className="sort" value={sortNotes} onChange={onSort}>
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
