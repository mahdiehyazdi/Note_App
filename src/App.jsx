import "./App.css";
import "./App.responsive.css";
import "./index.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import NoeteBody from "./Components/NoeteBody";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <Landing />
            <NoeteBody />
            <Footer />
        </div>
    );
}
