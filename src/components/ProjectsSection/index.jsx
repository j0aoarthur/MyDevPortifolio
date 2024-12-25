import {ProjectsWrapper, Section} from "./styles.js";
import {useTranslation} from "react-i18next";
import {ProjectComponent} from "../ProjectComponent/index.jsx";

export function ProjectsSection() {
    const {t} = useTranslation();

    const projects = t("projects", { returnObjects: true });

    return (
        <Section id={"projects"}>
            <h2>{t("project")}</h2>
            <ProjectsWrapper>
                {Object.entries(projects).map(([key, project], index) => (
                    <ProjectComponent
                        key={key}
                        left={index % 2 !== 0}
                        number={project.number}
                        name={project.name}
                        description={project.description}
                        images={project.images}
                        githubLink={project.githubLink}
                        link={project.link}
                    />
                ))}
            </ProjectsWrapper>
        </Section>
    )
}




