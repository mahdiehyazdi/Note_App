import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__text">
                    <p>I have several App in React.js, if you need to connect with me, click on my full name down</p>
                    <h4>
                        Powered by &nbsp;
                        <a target="_blank" href="mailto: mahdiehyazdi801@gmail.com">
                            Mahdieh Yazdi
                        </a>
                    </h4>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
    function SocialMedia() {
        return (
            <div className="footer__socialmedia">
                <h5>Follow me on sioal media</h5>
                <div className="footer__icons">
                    <a target="_blank" href="https://instagram.com/m_y.dev?igshid=MzRlODBiNWFlZA==">
                        <img src="/Svg/instagram.svg" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BnN1D4VqlSdakv%2BCa7F76iw%3D%3D">
                        <img src="/Svg/linkdin.svg" />
                    </a>
                    <a target="_blank" href="https://t.me/m_y_dev">
                        <img src="/Svg/telegram.svg" />
                    </a>
                    <a target="_blank" href="https://github.com/mahdiehyazdi">
                        <img src="/Svg/github.svg" />
                    </a>
                </div>
            </div>
        );
    }
}
