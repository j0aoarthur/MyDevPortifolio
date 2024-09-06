import {Icon} from "@iconify/react";
import {Container, InfoWrapper, LinksWrapper, StyledCarousel, StyledImage} from "./styles.js";

export function ProjectComponent({ number, name, description, images, link, githubLink, left }) {
    return (
        <Container left={left}>
            <StyledCarousel variableWidth={false} arrows infinite autoplay>
                {images ? (
                    images.map((image, index) => (
                        <StyledImage key={index} src={image} alt={name} preview={{movable: false, maxScale:2, scaleStep:0.3, minScale:0.7}} />
                    ))
                ) : (
                    <StyledImage src="http://via.placeholder.com/530x250" alt={"Imagem Padrão"} />
                )}
            </StyledCarousel>
            <InfoWrapper>
                <h1>{number}</h1>
                <h2>{name}</h2>
                <p>{description}</p>
                <LinksWrapper>
                    {link && (
                        <a href={link}>
                            <Icon icon={"akar-icons:link-out"} />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink}>
                            <Icon icon={"mdi:github"} />
                        </a>
                    )}
                </LinksWrapper>
            </InfoWrapper>
        </Container>
    )
}
