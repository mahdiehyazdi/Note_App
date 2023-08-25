import React, { useState } from "react";
import Modal from "@mui/material/Modal";

export default function Landing() {
    return (
        <div>
            <TextLanding />
            <LandingBox />
        </div>
    );
}

function TextLanding() {
    return (
        <div className="landing">
            <div className="landing__text">
                <p>Vase Note App!</p>
                <span>Note your text</span>
            </div>
        </div>
    );
}

function LandingBox() {
    const [modal, setModal] = useState(false);
    const handleClose = () => setModal(false);
    return (
        <div className="landingbox">
            <div className="landingbox__content">
                <img src="/Svg/imaglanding.svg" />
                <div>
                    <h3>Simple Note App!</h3>
                    <span>You can Note your plan here. If you want to learn this app, click on the down button </span>
                    <input type="button" value="Read more" className="button" onClick={() => setModal(true)} />
                </div>
            </div>
            <Modal open={modal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div id="modal">
                    <span onClick={handleClose}>&#215;</span>
                    <h4>Connect with me</h4>
                    <p>
                        <img src="/Svg/instagram.svg" /> ID :{" "}
                        <a target="_blank" href="https://instagram.com/m_y.dev?igshid=MzRlODBiNWFlZA==">
                            m_y.dev
                        </a>
                    </p>
                    <p>
                        <img src="/Svg/telegram.svg" /> ID :
                        <a target="_blank" href="https://t.me/m_y_dev">
                            m_y_dev
                        </a>
                    </p>
                </div>
            </Modal>
        </div>
    );
}
