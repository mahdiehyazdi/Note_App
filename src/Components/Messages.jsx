import { UseTheme } from "./context/ThemeProvider";

export default function Messages({ text, children, danger }) {
    return (
        <div className="notnote">
            {children}
            <h4 style={{ color: danger === "true" ? "var(--rose-600)" : "var(--slate-200)" }}>{text}</h4>
        </div>
    );
}
