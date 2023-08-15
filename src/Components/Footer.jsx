import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__content__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet augue a nibh </p>
                    <h4>Powered by Mahdieh Yazdi</h4>
                </div>
                <div className="footer__socialmedia">
                    <h5>Follow us on sioal media</h5>
                    <div className="footer__icons">
                        <img src="/Svg/instagram.svg" />
                        <img src="/Svg/linkdin.svg" />
                        <img src="/Svg/telegram.svg" />
                        <img src="/Svg/github.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
