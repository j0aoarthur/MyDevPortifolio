import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: stretch;
    margin: 30px 0;
    
    & > h5 {
        color: #FFF;
        font-size: 18px;
        font-weight: 400;
        text-transform: capitalize;
    }
    
    @media (max-width: 600px) {
        & > h5 {
            font-size: 13px;
        }
    }
`