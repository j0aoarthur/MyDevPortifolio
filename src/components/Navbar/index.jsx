import { useState } from 'react';
import { HeaderContainer, NavSection, SocialWrapper, HamburgerMenu, MobileMenu } from "./styles.js";
import { Icon } from '@iconify/react';
import { GITHUB_LINK, LINKEDIN_LINK } from "../../utils/constants.js";
import {LanguageSwitch} from "../LanguageSwitch/index.jsx";
import {useTranslation} from "react-i18next";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderContainer>
            <LanguageSwitch/>
            <HamburgerMenu onClick={toggleMobileMenu}>
                <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} />
            </HamburgerMenu>

            <NavSection>
                <a href="#home">{t("home")}</a>
                <a href="#aboutMe">{t("about_me")}</a>
                <a href="#projects">{t("project")}</a>
                <a href="#contact">{t("contacts")}</a>
                <span>|</span>
                <SocialWrapper>
                    <a href={GITHUB_LINK}>
                        <Icon icon="mdi:github" />
                    </a>
                    <a href={LINKEDIN_LINK}>
                        <Icon icon="ri:linkedin-fill" />
                    </a>
                </SocialWrapper>
            </NavSection>

            <MobileMenu isOpen={isMobileMenuOpen}>
                <a href="#home" onClick={toggleMobileMenu}>{t("home")}</a>
                <a href="#aboutMe" onClick={toggleMobileMenu}>{t("about_me")}</a>
                <a href="#projects" onClick={toggleMobileMenu}>{t("project")}</a>
                <a href="#contact" onClick={toggleMobileMenu}>{t("contacts")}</a>
            </MobileMenu>
        </HeaderContainer>
    );
}