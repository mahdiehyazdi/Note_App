import { Grid } from "@mui/material";
import { UseTheme } from "./context/ThemeProvider";

export default function Header({ children }) {
    const { theme } = UseTheme();
    return (
        <Grid container className={"header " + theme}>
            <img src="/Svg/logo.svg" />
            <h4 className="header__title">
                Vase Note <p>App!</p>
            </h4>
            <span className="theme__text">dark</span>
            {children}
            <span className="theme__text">light</span>
        </Grid>
    );
}
