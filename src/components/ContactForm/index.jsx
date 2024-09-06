import {ContactFormContainer, StyledButton, StyledForm, StyledInput, StyledTextArea, SuccessMessage} from "./styles.js";
import {useForm} from "@formspree/react";
import {useTranslation} from "react-i18next";

export function ContactForm( {children} ) {
    const [state, handleSubmit] = useForm("mrbzdgdy");
    const {t} = useTranslation();


    return (
        <ContactFormContainer>
            {children}
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput name={"name"} type={"text"} placeholder={t("form_name")} required />
                <StyledInput name={"email"} type={"email"} placeholder={t("form_email")} required />
                <StyledInput name={"subject"} type={"text"} placeholder={t("form_subject")} required />
                <StyledTextArea name={"message"} placeholder={t("form_message")} required></StyledTextArea>
                <StyledButton disabled={state.submitting} type={"submit"}>{t("form_submit")}</StyledButton>
            </StyledForm>
            {state.succeeded && <SuccessMessage>{t("form_success")}</SuccessMessage>}
        </ContactFormContainer>
    )
}
