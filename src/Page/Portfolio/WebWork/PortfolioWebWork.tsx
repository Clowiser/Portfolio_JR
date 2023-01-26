import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    SElementContainer,
    SElementImage, SElementText, SPortfolioDetailsLink,
    SPortfolioWrapper, SSelect, SSoftwareDevIcons,
} from "../PortfolioIndex.styled";
import {useIntl} from "react-intl";
import {SMessagesContainer} from "../../../style/Style.styled";
import Loader from "../../../Component/Loader/Loader";

const PortfolioWebWork = (): JSX.Element => {
    const intl = useIntl();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState("default");

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3000/api/portfolio_web_realisations")
            .then(res => {
                setData(res.data)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error)
            })
    }, []);

    useEffect(() => {
        const handleChange = (currentOptions: string) => {
            setOptions(currentOptions)
            const sorted = [...data];

            if (currentOptions === "technologie") {
                sorted.sort((a, b) =>
                    a.section > b.section ? 1 : -1,
                );
                setData(sorted);
            } else if (currentOptions === "date") {
                sorted.sort((a, b) =>
                    a.date > b.date ? 1 : -1,
                );
                setData(sorted);
            } else if (currentOptions === "default") {
                sorted.sort((a, b) =>
                    a.id > b.id ? 1 : -1,
                );
                setData(sorted);
            }
        }
        handleChange(options)
    }, [options])

    if (error) {
        return <p>{intl.formatMessage({id: 'loading_api_error'})}</p>
    }
    if (loading) {
        return (
            <SMessagesContainer>
                <Loader/>
            </SMessagesContainer>)
    }

    return (
        <>
            <SSelect id="webWork" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setOptions(e.target.value)
            }} value={options}>
                <option value="">Par défaut</option>
                <option value="technologie">Par technologie</option>
                <option value="date">Par date</option>
            </SSelect>

            <SPortfolioWrapper>
                {data.map((element) => {
                    return (
                        <div key={element.id}>
                            <SElementContainer>
                                <SPortfolioDetailsLink to={`/portfolio/WW/${element.id}`}>
                                    <SElementImage src={element.image} alt={"img" + element.id}/>
                                </SPortfolioDetailsLink>
                                <SSoftwareDevIcons src={element.icon_section} alt={"icons software development"}>
                                </SSoftwareDevIcons>
                                <SElementText>
                                    <p>{element.title}</p>
                                </SElementText>
                            </SElementContainer>
                        </div>
                    )
                })}
            </SPortfolioWrapper>
        </>
    );
}

export default PortfolioWebWork;
