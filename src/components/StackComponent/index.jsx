import {Container, StyledIcon} from "./styles.js";

export function StackComponent({ icon, text, style }) {
    return (
        <Container>
            <div>
                <StyledIcon icon={icon} style={style}/>
            </div>
            <h4>{text}</h4>
        </Container>

    )
}
