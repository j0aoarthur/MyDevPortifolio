import {useEffect, useState} from "react";
import {FlagIcon, SwitchContainer, ToggleIndicator} from "./styles.js";
import {useTranslation} from "react-i18next";

export function LanguageSwitch() {
    const { i18n } = useTranslation();
    const [isPortuguese, setIsPortuguese] = useState(i18n.language === 'pt-BR');

    useEffect(() => {
        i18n.changeLanguage(isPortuguese ? 'pt-BR' : 'en-US');
    }, [isPortuguese, i18n]);

    const handleToggle = () => {
        setIsPortuguese(prev => !prev);
    };

    return (
        <SwitchContainer onClick={handleToggle}>
            <ToggleIndicator $isPortuguese={isPortuguese} />
            <FlagIcon icon={"flag:br-1x1"} $isPortuguese={isPortuguese} />
            <FlagIcon icon={"flag:um-1x1"} $isPortuguese={!isPortuguese} />
        </SwitchContainer>
    );
}