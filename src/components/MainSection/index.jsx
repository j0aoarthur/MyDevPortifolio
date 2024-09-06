import {ButtonsContainer, ProfileCircle, ProfileImage, ProfileWrapper, Section, TitleWrapper} from "./styles.js";
import profileImage from "../../assets/profileImage.png";
import {Icon} from "@iconify/react";
import {Button} from "../Button/index.jsx";
import {ReactTyped} from "react-typed";
import {GITHUB_LINK} from "../../utils/constants.js";
import {useTranslation} from "react-i18next";

export function MainSection() {
    const { t } = useTranslation();

    return (
        <Section id={"home"}>
            <TitleWrapper>
                <ReactTyped
                    strings={[`<h1>${t('my_name_is')} <p>João Arthur Britto</p> </h1>\n<h2>${t('and_i_am')} <p>${t('developer')}</p> </h2>`]}
                    showCursor={false}
                    typeSpeed={20}
                />
                <ButtonsContainer>
                    <Button text={t("resume_pt")} width={"200px"}>
                        <Icon icon="streamline:business-user-curriculum"/>
                    </Button>
                    <Button text={t("resume_en")} width={"200px"}>
                        <Icon icon="streamline:business-user-curriculum"/>
                    </Button>
                    <Button href={GITHUB_LINK} text={"GitHub"} width={"200px"}>
                        <Icon icon="mdi:github"/>
                    </Button>
                </ButtonsContainer>
            </TitleWrapper>

            <ProfileWrapper>
                <ProfileCircle/>
                <ProfileImage src={profileImage}/>
            </ProfileWrapper>
        </Section>
    );
}