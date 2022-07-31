import {SRealisationContainer, SRealisationTitle} from "./Realisation.styled";
import {useIntl} from "react-intl";

const Realisation = () => {
    const intl = useIntl();

    return (
        <SRealisationContainer>
            <SRealisationTitle>{intl.formatMessage({id: 'realisation_title'})}</SRealisationTitle>

        </SRealisationContainer>
    )
}

export default Realisation;