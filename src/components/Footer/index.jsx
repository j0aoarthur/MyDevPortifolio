import {useTranslation} from "react-i18next";
import {FooterWrapper} from "./styles.js";

export function Footer() {
    const {t} = useTranslation();

    return (
        <FooterWrapper>
            <h5>{t("footer")} ©</h5>
        </FooterWrapper>
    )
}
