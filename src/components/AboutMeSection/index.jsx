import {Section, TechSection, TextSection, Title} from "./styles.js";
import {StackComponent} from "../StackComponent/index.jsx";
import {useTranslation} from "react-i18next";


export function AboutMeSection() {
    const {t} = useTranslation()

    return (
        <Section id={"aboutMe"}>
            <TextSection>
                <Title>{t("about_me")}</Title>
                <p dangerouslySetInnerHTML={{__html: t('about_me_paragraph.1')}}/>
                <p>{t("about_me_paragraph.2")}</p>
            </TextSection>

            <TechSection>
                <Title>{t("tech_stack")}</Title>
                <div>
                    <StackComponent text={"Java"} icon={"devicon:java"}/>
                    <StackComponent text={"Spring Boot"} icon={"devicon:spring"}/>
                    <StackComponent text={"ReactJS"} icon={"devicon:react"}/>
                    <StackComponent text={"JavaScript"} icon={"devicon:javascript"}/>
                    <StackComponent text={"Python"} icon={"vscode-icons:file-type-python"}/>
                    <StackComponent text={"Django"} icon={"devicon-plain:django"} style={{color: "#2BA977"}}/>
                    <StackComponent text={"ViteJS"} icon={"devicon:vitejs"}/>
                    <StackComponent text={"MySQL"} icon={"devicon:mysql"}/>
                    <StackComponent text={"PostgreSQL"} icon={"devicon:postgresql"}/>
                    <StackComponent text={"Docker"} icon={"vscode-icons:file-type-docker2"}/>
                    <StackComponent text={"Git"} icon={"devicon:git"}/>
                </div>
            </TechSection>
        </Section>
    )
}
