import React from "react";

import MainImage from '../../images/MainImage.mp4'

export default function Home() {
    return (
        <video playsInline autoPlay muted style={{ maxWidth: "100%" }}>
            <source src={MainImage} type="video/mp4" />
        </video>
    );
}