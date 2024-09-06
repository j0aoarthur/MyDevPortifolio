import styled from "styled-components";

export const ButtonContainer = styled.a`
    display: flex;
    padding: 10px 15px;
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1.2px solid #FFF;
    transition: 0.2s;

    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    
    & > svg {
        font-size: 22px;
        transition: 0.1s;
    }
    
    &:hover {
        cursor: pointer;
        background-color: white;
        color: var(--background-color);
        
        & > svg {
            color: var(--background-color);
        }
    }
    
    @media (max-width: 620px) {
        font-size: 17px;
    }
`