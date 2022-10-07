import styled from "styled-components";
import {Link} from "react-router-dom";
// @ts-ignore
import {HashLink} from "react-router-hash-link";

export const SPortfolioContainer = styled.div`
  margin: 3rem;
  color: ${props => props.theme.primaryColor};
`;

//Link
export const SPortfolioWrapperLink = styled.div`
  margin: 6rem auto;
  display: flex;
  justify-content: center;
`;

export const SImgDraw = styled.img`
  border-radius: 1rem;
  position: relative;
`;

export const SImgCode = styled.img`
  border-radius: 1rem;
  position: relative;
`;

export const SPortfolioHashLink = styled(HashLink)`

  :hover {
    transform: scale(1.15);
  }
`;

//Portfolio
export const SPortfolioSection = styled.div`
  margin: 10em auto`;


//Each Part
export const SPortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
`;

export const SElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 3rem auto;
  position: relative;
`;

export const SElementImage = styled.img`
  cursor: pointer;
  width: 100%;
  border-radius: 1rem;
  transform: scale(1);

  &:hover {
    transform: scale(1.15);
  }`;

export const SSoftwareDevIcons = styled.img`
  position: absolute;
  z-index: 2;
  bottom: -2rem;
  left: -2rem;
  width: 3.5rem;
`;

export const SPortfolioTitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: 0.2rem;
  text-align: center;
  margin: 1rem;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SElementText = styled.div``;

export const SShareLogo = styled.img`
  width: 2.5rem;
  transform: scale(1);
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    transform: scale(1.15);
  }
`;

export const SPortfolioDetailsLink = styled(Link)``;


// PortfolioWebWork Details
export const SPortfolioDetailContainer = styled.div``;

export const SElementDetailWrapper = styled.div`
  display: flex;
  margin: 3rem;
`;

export const SElementImageDetail = styled.img`
  width: 50%;
  border-radius: 1rem;
`;

export const SElementDetailInfos = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SShareLogoContainer = styled.div`
  text-align: center;
`;
