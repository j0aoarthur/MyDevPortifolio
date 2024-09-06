import {ContactForm} from "../ContactForm/index.jsx";
import {useTranslation} from "react-i18next";
import {Icon} from "@iconify/react";
import {ContactContainer, ContactLinks, Link, LinksWrapper, TitleWrapper} from "./styles.js";
import {EMAIL, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK} from "../../utils/constants.js";

export function ContactSection() {
    const {t} = useTranslation();

    return (
        <ContactContainer id={"contact"}>
            <ContactForm>
                <TitleWrapper>
                    <h2>{t("contact_me")}</h2>
                    <p>{t("contact_me_subtitle")}</p>
                </TitleWrapper>
            </ContactForm>

            <ContactLinks>
                <TitleWrapper>
                    <h2>{t("contact_links")}</h2>
                </TitleWrapper>
                <LinksWrapper>
                    <Link href={`mailto:${EMAIL}`}>
                        <Icon icon="material-symbols:mail-outline" />
                        <p>{EMAIL}</p>
                    </Link>
                    <Link href={INSTAGRAM_LINK}>
                        <Icon icon="mdi:instagram" />
                        <p>j0aoarthur</p>
                    </Link>
                    <Link href={LINKEDIN_LINK}>
                        <Icon icon="mdi:linkedin" />
                        <p>linkedin.com/in/joao-arthur-britto</p>
                    </Link>
                    <Link href={GITHUB_LINK}>
                        <Icon icon="mdi:github" />
                        <p>github.com/j0aoarthur</p>
                    </Link>
                </LinksWrapper>
            </ContactLinks>
        </ContactContainer>
    )
}
