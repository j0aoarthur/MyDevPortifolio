import styled from "styled-components";
import {Carousel, Image} from "antd";

export const Container = styled.div`
    display: flex;
    padding: 20px 0;
    align-items: center;
    column-gap: 100px;
    row-gap: 20px;
    align-self: stretch;
    flex-wrap: wrap;
    justify-content: center;
    flex-flow: ${props => props.left ? "row-reverse" : "row"};
    
    @media (max-width: 1280px) {
        flex-flow: column;
    }
    
`

export const StyledCarousel = styled(Carousel)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    border-radius: 20px;
    overflow: hidden;
    
    @media (max-width: 620px) {
        width: 400px;
    }
`

export const StyledImage = styled(Image)`
    object-fit: cover;
    width: 550px !important;
    height: 365px !important;
    
    @media (max-width: 620px) {
        width: 400px !important;
        height: 250px !important;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    gap: 20px;
    
    & > h1 {
        font-size: 38px;
        font-weight: 900;
        font-style: italic; 
        letter-spacing: -1.5px;
    }
    
    & > h2 {
        font-size: 32px;
        font-weight: 800;
        letter-spacing: -1px;
    }
    
    & > p {
        text-align: justify;
        max-width: 550px;
        color: #71717A;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.3px;
        line-clamp: 7;
    }

    @media (max-width: 620px) {

        & > h1 {
            font-size: 30px;
        }
        
        & > h2 {
            font-size: 26px;
        }

        & > p {
            font-size: 14px;
            max-width: 400px;
        }
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    gap: 20px;
    
    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    & > a > svg {
        font-size: 30px;
    }

    & > a:hover > svg {
        filter: drop-shadow(0px 0px 12px rgba(255,255,255,0.8));
        -webkit-filter: drop-shadow(0px 0px 12px rgba(255,255,255,0.8));
    }
    
`

