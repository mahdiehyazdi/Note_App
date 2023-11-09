import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { UseTheme } from "./context/ThemeProvider";

const ThemeSwitchToggle = styled(Switch)(({ theme }) => ({
    width: 80,
    height: 34,
    padding: 7,
    cursor: "pointer",
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transition: "0.6s ease-in-out",
        transform: "translateX(6px)",
        "&.Mui-checked": {
            transform: "translateX(40px)",
            transition: "0.6s ease-in-out",
            "& .MuiSwitch-thumb:before": {
                backgroundRepeat: "no-repeat",
                backgroundPosition: " 5px 4px",
                backgroundSize: "cover",
                backgroundImage: theme === "dark" ? `url("/Svg/moon.svg")` : `url("/Svg/sun.svg")`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                background: "transparent",
            },
            "& .MuiSwitch-switchBase:active::after": {
                width: "100px",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        background: theme === "dark" ? "var(--slate-700)" : "linear-gradient(180deg, #FFC37C 0%, #FF7D7C 100%)",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px 3px",
            backgroundSize: "cover",
            backgroundImage: theme !== "dark" ? `url("/Svg/sun.svg")` : `url("/Svg/moon.svg")`,
        },

        "&:after": {
            width: "100px",
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "transparent",
        border: "1px solid var(--slate-300)",
        borderRadius: 20 / 2,
    },
}));
export default function SwitchTheme() {
    const { theme, setTheme } = UseTheme();
    return <ThemeSwitchToggle checked={theme === "dark"} sx={{ m: 1 }} onChange={(e) => setTheme(e.target.checked ? "dark" : "")} />;
}
