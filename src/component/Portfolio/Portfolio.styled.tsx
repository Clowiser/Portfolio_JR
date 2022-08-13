import styled from "styled-components";
import {Link} from "react-router-dom";
// @ts-ignore
import {HashLink} from "react-router-hash-link";

export const SPortfolioContainer = styled.div``;

export const SPortfolioContainerLink = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

export const SPortfolioWrapperLink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40rem;
`;

export const SPortfolioHashLink = styled(HashLink)`
  text-decoration: none`;

export const SPortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
`;

export const SElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 1rem auto;
`;

export const SElementImage = styled.img`
  cursor: pointer;
  width: 100%;
  border-radius: 1rem;
  transform: scale(1);

  &:hover {
    transform: scale(1.15);
  }`;

export const SElementWrapper = styled.div``;

export const SSoftwareDevIconsContainer = styled.div`
  position: relative`;

export const SSoftwareDevIcons = styled.img`
  position: absolute;
  z-index: 2;
  top: -1.5rem;
  left: -13rem;
  width: 4rem`;

export const SPortfolioTitle = styled.h2`
  text-align: center;
  margin: 1rem;
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
export const SPortfolioDetailContainer = styled.div`
  display: flex`;

export const SElementDetailWrapper = styled.div`
  display: flex;
  margin: 5rem;
`;

export const SElementImageDetail = styled.img`
  width: 50%;
  border-radius: 1rem;
`;

export const SElementDetailImageInfos = styled.div`
  display: flex;

`;
export const SElementDetailInfos = styled.div`
  margin-left: 1rem;
`;

export const SShareLogoContainer = styled.div`
  text-align: center`;




