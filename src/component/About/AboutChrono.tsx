import React from "react"
import {Chrono} from "react-chrono";
import {TimelineItemModel} from "react-chrono/dist/models/TimelineItemModel";
import jessica_photo from "../../style/assets/img/photo/Jessica Rigaud-min.jpg"

const AboutChrono = (): JSX.Element => {
    const items = [{
        title: "Qui suis-je ?",
        cardSubtitle: " Je m'appelle Jessica Rigaud, originaire de Franche-Comté, j'ai grandi dans la région Auvergne-Rhône-Alpes depuis mon enfance et vis aujourd'hui dans le département de la Savoie. J'ai été très vite charmée par la région qui regorge de richesses naturelles, culturelles et gastronomiques. C'est un lieu où il fait bon d'y vivre, d'y rire et d'y manger !",
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

export default AboutChrono;