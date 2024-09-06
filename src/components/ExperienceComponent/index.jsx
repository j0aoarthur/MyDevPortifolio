import React, {useState} from 'react';
import {Container, Description, Header, InfoWrapper, TitleWrapper} from "./styles.js";
import {Icon} from "@iconify/react";
import {useTranslation} from "react-i18next";

export function ExperienceComponent({ name, description, date, certificateLink, image }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const {t} = useTranslation();

    const toggleDescription = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <Container onClick={toggleDescription}>
            <Header>
                <TitleWrapper>
                    <img src={image} alt="experience" />
                    <div>
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </TitleWrapper>
                <InfoWrapper>
                    <p>{date}</p>
                    <a title={t("view_certificate")} href={certificateLink} onClick={(e) => e.stopPropagation()}>
                        <Icon icon="ph:certificate" />
                    </a>
                </InfoWrapper>
            </Header>
            <Description isExpanded={isExpanded}>
                {description}
            </Description>
        </Container>
    );
}

