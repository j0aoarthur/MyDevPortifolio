import {CardsWrapper, Section} from "./styles.js";
import {useTranslation} from "react-i18next";
import {ExperienceComponent} from "../ExperienceComponent/index.jsx";

export function ExperienceSection() {
    const {t} = useTranslation();
    return (
        <Section id={"experience"}>
            <h2>{t("experience")}</h2>
            <CardsWrapper>
                <ExperienceComponent
                    name={t("courses.1.name")}
                    date={t("courses.1.date")}
                    image={t("courses.1.image")}
                    certificateLink={t("courses.1.certificateLink")}
                    description={t("courses.1.description")}
                />
                <ExperienceComponent
                    name={t("courses.2.name")}
                    date={t("courses.2.date")}
                    image={t("courses.2.image")}
                    certificateLink={t("courses.2.certificateLink")}
                    description={t("courses.2.description")}
                />
                <ExperienceComponent
                    name={t("courses.3.name")}
                    date={t("courses.3.date")}
                    image={t("courses.3.image")}
                    certificateLink={t("courses.3.certificateLink")}
                    description={t("courses.3.description")}
                />
                <ExperienceComponent
                    name={t("courses.4.name")}
                    date={t("courses.4.date")}
                    image={t("courses.4.image")}
                    certificateLink={t("courses.4.certificateLink")}
                    description={t("courses.4.description")}
                />
            </CardsWrapper>
        </Section>
    )
}
