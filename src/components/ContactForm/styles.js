import styled from "styled-components";

export const ContactFormContainer = styled.aside`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 400px;
`;

export const StyledForm = styled.form`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const StyledInput = styled.input`
    align-items: center;
    align-self: stretch;
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 10px;
    color: #FFF;
    display: flex;
    font-size: 15px;
    font-weight: 400;
    padding: 15px 12px;
    font-family: "Open Sans", sans-serif;

    &::placeholder {
        color: rgba(255, 255, 255, 0.50);
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 1012px) {
        font-size: 14px;
        padding: 13px 10px;
    }
`;

export const StyledTextArea = styled(StyledInput).attrs({ as: "textarea" })`
    
    min-height: 80px;
    resize: vertical;
`;

export const StyledButton = styled.button`
    align-items: center;
    align-self: stretch;
    background: var(--default-gradient);
    border: none;
    border-radius: 12px;
    color: #FFF;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    justify-content: center;
    padding: 15px;
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        filter: brightness(85%);
    }
    
    &:disabled {
        filter: grayscale(100%);
        cursor: not-allowed;
    }

    @media (max-width: 1012px) {
        font-size: 16px;
    }
`;

export const SuccessMessage = styled.p`
    color: #43B692;
    font-size: 15px;
    text-align: center;
`