import {
    SElementDetailWrapper, SElementDetailImageInfos,
    SElementImageDetail,
    SPortfolioDetailContainer,
    SShareLogo,
    SShareLogoContainer, SElementDetailInfos
} from "../PortfolioIndex.styled";
import logo_Github from "../../../style/assets/img/logo/github_logo.png";
import logo_Netlify from "../../../style/assets/img/logo/netlify_logo.png";
import logo_Figma from "../../../style/assets/img/logo/figma_logo.png";

interface IPortfolioDetail {
    data: any;
    id: string | undefined;
}

const PortfolioDetail = (props: IPortfolioDetail) => {
    const {data, id} = props;

    return (
        <SPortfolioDetailContainer>
            {data && data.map((element: any, i: number) => {
                return (
                    id && +id === data[i].id ? (
                        <div key={data[i].id}>
                            <SElementDetailWrapper>
                                <SElementDetailImageInfos>
                                    <SElementImageDetail src={data[i].image} alt={"img" + data[i].id}/>
                                    <SElementDetailInfos>
                                        <p>{data[i].title}</p>
                                        <p>{data[i].subtitle}</p>
                                        <p>{data[i].description}</p>
                                        <SShareLogoContainer>
                                            {data[i].github_boolean === "true" ? <SShareLogo src={logo_Github}/> : null}
                                            {data[i].netifly_boolean === "true" ?
                                                <SShareLogo src={logo_Netlify}/> : null}
                                            {data[i].figma_boolean === "true" ? <SShareLogo src={logo_Figma}/> : null}
                                        </SShareLogoContainer>
                                    </SElementDetailInfos>
                                </SElementDetailImageInfos>
                            </SElementDetailWrapper>
                        </div>) : (<></>)
                )
            })}
        </SPortfolioDetailContainer>)
}

export default PortfolioDetail;