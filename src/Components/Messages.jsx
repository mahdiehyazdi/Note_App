import React from "react";

export default function Messages({ text, children }) {
    return (
        <div className="notnote">
            {children}
            <h4>{text}</h4>
        </div>
    );
}
