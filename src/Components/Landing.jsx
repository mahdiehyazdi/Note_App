import React from "react";

export default function Landing() {
    return (
        <div>
            <FilterBox />
            <LandingBox />
        </div>
    );
}

function FilterBox() {
    return (
        <div className="landing">
            <div className="landing__searchbox">
                <div className="landing__searchbox__input">
                    <img src="/Svg/search.svg" />
                    <input type="text" placeholder="Search" id="search" />
                </div>
                <div className="landing__seachbox__text">
                    <p>Vase Note App!</p>
                    <span>Note your text</span>
                </div>
            </div>
        </div>
    );
}

function LandingBox() {
    return (
        <div className="landingbox">
            {/* <img className="landingbox__back" src="/Svg/back.svg" />s */}
            <div className="landingbox__content">
                <img src="/Svg/imaglanding.svg" />
                <div>
                    <h3>Lorem ipsum!</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet augue a nibh dapibus lobortis.</span>
                    <input type="button" value="Read more" className="button" />
                </div>
            </div>
        </div>
    );
}
