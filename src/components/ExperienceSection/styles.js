import styled from "styled-components";

export const Section = styled.section`
    margin-top: 20px;
    display: flex;
    padding: 30px 90px;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    & > h2 {
        font-size: 45px;
        font-weight: 700;
    }

    @media (max-width: 620px) {
        padding: 30px 20px;

        & > h2 {
            font-size: 30px;
        }
    }
`

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    align-self: stretch;
`