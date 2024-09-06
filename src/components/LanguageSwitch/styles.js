// src/components/YourComponent/styles.js
import styled from "styled-components";
import { Icon } from "@iconify/react";

const iconFontSize = 39;
const borderRadiusIcon = 7;
const paddingIndicator = 8;
const paddingSwitch = 5;
const borderRadiusIndicator = borderRadiusIcon + paddingIndicator;
const borderRadiusSwitch = borderRadiusIndicator + paddingSwitch;
const backgroundOpacity = 0.13;
const indicatorBackgroundOpacity = 0.2;
const transitionDuration = 0.2;

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 15px;
    cursor: pointer;
    padding: ${paddingSwitch}px;
    border-radius: ${borderRadiusSwitch}px;
    background: rgba(255, 255, 255, ${backgroundOpacity});
`;

export const ToggleIndicator = styled.div`
    position: absolute;
    width: ${iconFontSize}px;
    height: ${iconFontSize}px;
    border-radius: ${borderRadiusIndicator}px;
    padding: ${paddingIndicator}px;
    left: ${(props) =>
            props.$isPortuguese
                    ? `${paddingSwitch}px`
                    : `calc(100% - ${21 + iconFontSize}px)`};
    background-color: rgba(255, 255, 255, ${indicatorBackgroundOpacity});
    transition: left ${transitionDuration}s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const FlagIcon = styled(Icon)`
    z-index: 2;
    font-size: ${iconFontSize}px;
    transition: opacity ${transitionDuration}s;
    border-radius: ${borderRadiusIcon}px;
    margin: ${paddingIndicator}px;
    opacity: ${(props) => (props.$isPortuguese ? 1 : 0.5)};
`;