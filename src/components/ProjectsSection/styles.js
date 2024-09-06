import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    padding: 30px 40px;
    flex-direction: column;
    align-items: center;
    gap: 30px;

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

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-self: stretch;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    
    @media (max-width: 900px) {
        
    }
`