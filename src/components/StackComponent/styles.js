import styled from "styled-components";
import {Icon} from "@iconify/react";

export const StyledIcon = styled(Icon)`
    font-size: 60px;
    filter: brightness(110%);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 68px;
    align-items: center;
    gap: 5px;
    
    & > h4 {
        color: #FFF;
        font-size: 15px;
        text-align: center;
        font-weight: 300;
        white-space: nowrap;
    }
    
    & > div {
        width: 50px;
        height: 50px;
        padding: 8px;
        border-radius: 8px;
        border: 1px white solid;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`