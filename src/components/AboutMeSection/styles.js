import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 80px;
    background: var(--secondary-background-color);
    gap: 50px;

    @media (max-width: 1140px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    @media (max-width: 620px) {
        padding: 50px 20px;
    }
`

export const Title = styled.h2`
    color: #FFF;
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 620px) {
        font-size: 25px;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    
    & > p {
        width: 550px;
        text-indent: 40px;
        text-align: justify;
        font-size: 18px;
        font-weight: 300;
    }

    @media (max-width: 1140px) {
        align-items: center;
        
        & > p {
            text-indent: 0;
            width: 80%;
            text-align: center;
        }
    }

    @media (max-width: 620px) {
        & > p {
            font-size: 16px;
        }
    }
`

export const TechSection = styled.div`
    display: flex;
    max-width: 750px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    
    & > div {
        display: flex;
        padding: 0 20px;
        align-items: center;
        align-content: center;
        gap: 24px 30px;
        flex-wrap: wrap;
    }

    @media (max-width: 1140px) {
        max-width: 900px;
        margin: 0 auto;
        align-self: stretch;
        align-items: center;
        
        & > div {
            justify-content: center;
        }
    }
`