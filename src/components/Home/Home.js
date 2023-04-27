import React from "react";

import MainImage from '../../images/MainImage.mp4?t=123456'

export default function Home() {
    return (
        <video playsInline="playsinline" loading="lazy" autoPlay muted style={{ top: 0, left: 0, width: '100%', height: '100%' }}>
            <source src={MainImage} type="video/mp4" />
        </video>
    );
}