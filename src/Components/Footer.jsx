import Github from "../../public/Svg/Github";
import Instagram from "../../public/Svg/Instagram";
import Linkdin from "../../public/Svg/Linkdin";
import Telegram from "../../public/Svg/Telegram";
import { UseTheme } from "./context/ThemeProvider";

export default function Footer() {
    const { theme } = UseTheme();

    return (
        <div className="footer">
            <div className="footer__content">
                <div className={"footer__content__text " + theme}>
                    <h5>
                        Created by &nbsp;
                        <a className={theme} target="_blank" href="mailto: mahdiehyazdi801@gmail.com">
                            Mahdieh Yazdi
                        </a>
                    </h5>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
    function SocialMedia() {
        return (
            <div className="footer__socialmedia">
                <div className="footer__icons">
                    <a target="_blank" href="https://instagram.com/m_y.dev?igshid=MzRlODBiNWFlZA==">
                        <Instagram fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BnN1D4VqlSdakv%2BCa7F76iw%3D%3D">
                        <Linkdin fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
                    </a>
                    <a target="_blank" href="https://t.me/m_y_dev">
                        <Telegram fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
                    </a>
                    <a target="_blank" href="https://github.com/mahdiehyazdi">
                        <Github fill={theme === "dark" ? "var(--slate-25)" : "var(--slate-600)"} />
                    </a>
                </div>
            </div>
        );
    }
}
