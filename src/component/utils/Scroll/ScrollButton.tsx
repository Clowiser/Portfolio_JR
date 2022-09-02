import React, {useCallback, useEffect, useState} from 'react';
import {SButton, SShadowIcon} from "./ScrollButton.styled";
// @ts-ignore
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from "styled-components";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    // const [colorIcon, setColorIcon] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 30) {
            setVisible(true);
            // setColorIcon(false)
        } else if (scrolled < 30) {
            setVisible(false)
            // setColorIcon(true)
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
        <SButton style={{color: "#262223" || "#f5f5f5"}}>
            <SShadowIcon>
                <FaArrowCircleUp onClick={scrollToTop}
                                 style={{display: visible ? 'inline' : 'none'}}/>
            </SShadowIcon>
        </SButton>
    );
}

export default ScrollButton;