import Grid from "@mui/material/Grid";
import { UseTheme } from "./context/ThemeProvider";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import LandingArrow from "../../public/Svg/LandingArrow";

export default function Landing() {
    const { theme } = UseTheme();
    return (
        <div>
            <LandingBox theme={theme} />
        </div>
    );
}
const props = {
    percent: 50,
    colorCircle: "var(--slate-200)",
    fontColor: "var(--rose-600)",
    fontSize: "1.4rem",
    fontWeight: 800,
    size: 130,
    stroke: 10,
    speed: 100,
    unit: "%",
    animationOff: false,
    linearGradient: ["var(--orange-600)", "var(--rose-600)"],
    styles: {
        borderRadius: "50%",
    },
};
function LandingBox({ theme }) {
    return (
        <Grid container className={"landingbox " + theme}>
            <Grid item xs={6} sm={6} md={5} className="landing__progress">
                <div className="">
                    <div className={"landingbox__guid " + theme}>
                        <div className="landingbox__guid__circle done"></div>
                        <span>Done</span>
                    </div>
                    <div className={"landingbox__guid " + theme}>
                        <div className="landingbox__guid__circle incomplete"></div>
                        <span>Incomplete</span>
                    </div>
                </div>
                <CircularProgressBar {...props} />
            </Grid>

            <Grid item xs={6} sm={6} md={7} className={"landingbox__content " + theme}>
                <Grid xs={7} sm={8} item>
                    <h3>Add Your Note!</h3>
                    <span>You can Manage your plans! Add, delete and complite your note and see our activity in any tag </span>
                    <input type="button" value="Let’s to Start" className="button" />
                </Grid>
                <Grid xs={4} sm={4} item className="landing__content__arrow">
                    <LandingArrow fill={theme ? "var(--slate-25)" : "var(--slate-900)"} />
                </Grid>
            </Grid>
        </Grid>
    );
}
