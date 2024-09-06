import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-self: center;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    margin: 20px auto 0;
    max-width: 1600px;

    @media (max-width: 1140px) {
        gap: 200px;
        flex-direction: column;
        padding-left: 0;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    white-space: nowrap;
    
    
    & h1 {
        font-size: 48px;
        font-weight: 800;
    }

    & h2 {
        font-weight: 400;
        font-size: 28px;
    }

    & p {
        display: inline;
        background: var(--default-gradient);
        font-weight: 800;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1350px) {
        & h1 {
            font-size: 28px;
        }

        & h2 {
            font-size: 20px;
        }
    }

    @media (max-width: 1140px) {
        align-items: center;
        justify-content: center;
        text-align: center;

        & h2 {
            font-size: 20px;
        }
    }

    @media (max-width: 620px) {
        & h1 {
            font-size: 23px;
        }
        

        & h2 {
            font-size: 18px;
        }
    }
`;

export const ProfileWrapper = styled.div`
    height: 700px;
    position: relative;
    justify-self: flex-end;
    align-self: flex-end;

    @media (max-width: 1600px) {
        height: 600px;
        align-self: center;
    }

    @media (max-width: 1140px) {
        align-self: center;
        height: 550px;
    }
    
    @media (max-width: 600px) {
        height: 400px;
    }
`;

export const ProfileCircle = styled.div`
    border-radius: 50%;
    align-self: center;
    background: rgba(65, 65, 65, 0.1);
    position: absolute;
    top: -70px;
    z-index: -1;
    width: 550px;
    height: 550px;

    @media (max-width: 1600px) {
        width: 450px;
        height: 450px;
    }

    @media (max-width: 1140px) {
        width: 450px;
        height: 450px;
    }

    @media (max-width: 600px) {
        width: 350px;
        height: 350px;
    }
`;

export const ProfileImage = styled.img`
    height: 100%;
    object-fit: contain;
    filter: grayscale(100%) drop-shadow(-2px -5px 4px rgba(255,255,255, 0.15));
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: 500px;
    flex-wrap: wrap;
    margin-top: 25px;
    gap: 15px;

    @media (max-width: 1140px) {
        justify-content: center;
    }

    @media (max-width: 600px) {
        flex-direction: row;
        width: 350px;
        gap: 25px;
    }
`;