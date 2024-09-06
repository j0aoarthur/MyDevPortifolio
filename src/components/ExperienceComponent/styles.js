import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    align-self: stretch;

    border-radius: 9px;
    border: 0.5px solid #71717A;
    background: #000;
    cursor: pointer;
    transition: box-shadow 0.3s;
    
    &:hover {
        box-shadow: 3px 3px 10px rgba(255,255,255,0.2);
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    
    & > div {
        display: flex;
        flex-direction: column;
        gap: 2px;
        
        & p {
            display: none;
            color: #D4D4D8CC;
            font-size: 14px;
            font-weight: 600;
        }
    }
    
    & h3 {
        font-size: clamp(16px, 4vw, 22px);
        font-weight: 600;
    }
    
    & > img {
        object-fit: contain;
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }
    
    @media (max-width: 900px) {
        gap: 10px;
        
        & > div > p {
            display: block;
        }
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    
    & > p {
        color: #D4D4D8CC;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
    }
    
    & svg {
        font-size: 25px;
    }
    
    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
        border: 1px white solid;
        transition: 0.4s;
        
    }
    
    & a:hover {
        background: #FFF;
        
        & > svg {
            color: var(--background-color);
        }
        
    }

    @media (max-width: 900px) {
        gap: 5px;
        
        & > p {
            display: none;
        }

        & > svg {
            font-size: 20px;
        }
    }
`

export const Description = styled.p`
    align-self: stretch;
    color: #D4D4D8;
    text-align: justify;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.2px;
    overflow: hidden;
    max-height: ${({ isExpanded }) => (isExpanded ? 'none' : '63px')};
    display: -webkit-box;
    -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? 'none' : '3')};
    -webkit-box-orient: vertical;
`




