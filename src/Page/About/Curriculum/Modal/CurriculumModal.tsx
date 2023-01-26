import React from "react";
import {useIntl} from "react-intl";

export enum EJobs {
    web = "web",
    arts = "arts",
    hostellerie = "hostellerie",
}

export interface ICurriculumModal {
    closeModal: () => void;
}

const CurriculumModal = (props: ICurriculumModal) => {
    const {closeModal} = props;
    const intl = useIntl();

    if (EJobs.arts === "arts") {
        console.log("element arts")
    }

    return (
        <div>

            {Object.entries(EJobs).map((entry) => (
                <h1>{intl.formatMessage({id: `curriculum_title_${entry[1]}`})}</h1>))}
            <p>Texte</p>
        </div>
    )

}

export default CurriculumModal;