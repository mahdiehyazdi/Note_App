import "./App.css";
import "./App.responsive.css";
import "./index.css";
import Header from "./Components/Header";
import NoeteBody from "./Components/NoeteBody";
import Footer from "./Components/Footer";
import ThemeProvider, { UseTheme } from "./Components/context/ThemeProvider";
import NoteProvider from "./Components/context/NoteProvider";
import SwitchTheme from "./Components/SwitchTheme";
export default function App() {
    return (
        <ThemeProvider>
            <NoteProvider>
                <Apps />
            </NoteProvider>
        </ThemeProvider>
    );
}

function Apps() {
    const { theme } = UseTheme();
    return (
        <div className={"back " + theme}>
            <Header>
                <SwitchTheme />
            </Header>
            <NoeteBody />
            <Footer />
        </div>
    );
}
