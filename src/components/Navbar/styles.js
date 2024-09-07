import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
`;

export const NavSection = styled.nav`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    & > a {
        font-size: 18px;
        font-weight: 400;
        padding: 5px 0;
        transition: 0.2s;
        border-bottom: 1px transparent solid;
        text-align: center;
    }

    & > a:hover {
        border-color: white;
    }

    & > span {
        font-size: 25px;
        padding-bottom: 4px;
    }

    @media (max-width: 900px) {
        & > span {
            display: none;
        }
    }

    @media (max-width: 760px) {
        display: none;
    }
`;

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    & > a {
        display: flex;
        align-items: center;

        & > svg {
            font-size: 30px;
            transition: 0.2s;
        }
    }
    
    & > a:hover > svg {
        filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.7));
        -webkit-filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.7));
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    font-size: 30px;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 760px) {
        display: block;
        z-index: 1000;
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(38, 38, 38);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: auto;
    padding: 30px 0;
    max-height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: translateY(${props => (props.isOpen ? '0' : '-100%')});
    z-index: 999;

    & > a {
        font-size: 20px;
        padding: 5px 0;
        transition: 0.2s;
        border-bottom: 1px transparent solid;
        margin: 0 auto;
    }

    & > a:hover {
        border-color: white;
    }

    @media (min-width: 760px) {
        display: none;
    }
`;