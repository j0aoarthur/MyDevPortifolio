import {ButtonContainer} from "./styles.js";

export function Button({ text, children, href, onChange, width = "auto"}) {
    return (
        <ButtonContainer width={width} href={href} target={"_blank"} onChange={onChange}>
            {text} {children}
        </ButtonContainer>
    )
}
