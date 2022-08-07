import styled from "styled-components";
import {Link} from "react-router-dom";

export const SPortfolioContainer = styled.div``;

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


// Portfolio Details
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




