import React from "react"
import {Chrono} from "react-chrono";
import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";
import jessica_photo from "../../../style/assets/img/photo/Jessica Rigaud-min.jpg"

const Curriculum = (): JSX.Element => {
    const items = [{
        title: "Qui suis-je ?",
        cardSubtitle: "",
        media: {
            type: "IMAGE",
            source: {
                url: `${jessica_photo}`
            }
        }
    },
        {
            title: "Qu'ai-je fais ?",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: ``
                }
            }
        },
        {
            title: "Ou vais-je ?",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: ``
                }
            }
        },
        {
            title: "TEXTE ?",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
            media: {
                type: "IMAGE",
                source: {
                    url: ``
                }
            }
        }] as TimelineItemModel[];

    return (
        <div style={{width: "100%", height: "auto"}}>
            <Chrono items={items} mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: '#262223',
                        secondary: 'white',
                        titleColor: '#262223',
                        titleColorActive: 'grey',
                    }}
                    hideControls
            />
        </div>
    )

}

export default Curriculum;