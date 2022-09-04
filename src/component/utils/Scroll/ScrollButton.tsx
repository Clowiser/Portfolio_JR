import React, {useCallback, useEffect, useState} from 'react';
import {SButton, SShadowIcon} from "./ScrollButton.styled";
// @ts-ignore
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 30) {
            setVisible(true);
        } else if (scrolled < 30) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <SButton style={{color: "#262223"}}>
            <SShadowIcon>
                <FaArrowCircleUp onClick={scrollToTop}
                                 style={{display: visible ? 'inline' : 'none'}}/>
            </SShadowIcon>
        </SButton>
    );
}

export default ScrollButton;