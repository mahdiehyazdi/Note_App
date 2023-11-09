import SortImg from "../../public/Svg/SortImg";
import { UseTheme } from "./context/ThemeProvider";

export default function Sort({ sortNotes, onSort }) {
    const { theme } = UseTheme();
    return (
        <div className="sort__select">
            <SortImg fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
            <select className={"sort " + theme} value={sortNotes} onChange={onSort}>
                <option value="sortNote" disabled>
                    Sort Note
                </option>
                <option value="Latest">Latest</option>
                <option value="Earliest">Earliest</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    );
}
