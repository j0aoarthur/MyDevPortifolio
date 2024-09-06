import styled from "styled-components";


export const ContactContainer = styled.section`
    display: flex;
    padding: 80px 120px;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: flex-start;
    row-gap: 50px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        padding: 50px 80px;
    }
    
    @media (max-width: 620px) {
        padding: 50px;
    }
`

export const ContactLinks = styled.div`
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    flex-shrink: 0;

    @media (max-width: 932px) {
        align-items: center;
    }
`


export const TitleWrapper = styled.div`
    align-items: center;
    color: #FFF;
    display: flex;
    flex-direction: column;
    text-align: center;

    & > h2 {
        font-size: 30px;
        font-weight: 700;
    }

    & > p {
        font-size: 15px;
        font-weight: 400;
    }
    
    @media (max-width: 620px) {
        & > h2 {
            font-size: 22px;
        }

        & > p {
            font-size: 13px;
        }
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    
    & > svg {
        font-size: 30px;
        color: white;
    }
    
    & > p {
        font-size: 19px;
        font-weight: 400;
    }
    
    &:hover > p {
        text-decoration: underline;
    }

    @media (max-width: 620px) {
        & > svg {
            font-size: 25px;
        }
        
        & > p {
            font-size: 16px;
        }
    }
`