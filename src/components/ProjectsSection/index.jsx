import {ProjectsWrapper, Section} from "./styles.js";
import {useTranslation} from "react-i18next";
import {ProjectComponent} from "../ProjectComponent/index.jsx";

export function ProjectsSection() {
    const {t} = useTranslation();
    return (
        <Section id={"projects"}>
            <h2>{t("project")}</h2>
            <ProjectsWrapper>
                <ProjectComponent
                    number={t("projects.01.number")}
                    name={t("projects.01.name")}
                    description={t("projects.01.description")}
                    images={t("projects.01.images", {returnObjects: true})}
                />
                <ProjectComponent
                    left
                    number={t("projects.02.number")}
                    name={t("projects.02.name")}
                    description={t("projects.02.description")}
                    images={t("projects.02.images", {returnObjects: true})}
                    githubLink={t("projects.02.githubLink")}
                />

                <ProjectComponent
                    number={t("projects.03.number")}
                    name={t("projects.03.name")}
                    description={t("projects.03.description")}
                    images={t("projects.03.images", {returnObjects: true})}
                    githubLink={t("projects.03.githubLink")}
                />
                <ProjectComponent
                    left
                    number={t("projects.04.number")}
                    name={t("projects.04.name")}
                    description={t("projects.04.description")}
                    images={t("projects.04.images", {returnObjects: true})}
                    githubLink={t("projects.04.githubLink")}
                />
            </ProjectsWrapper>
        </Section>
    )
}




