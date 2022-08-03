import styled from "styled-components";

export const SPortfolioContainer = styled.div``;

export const SPortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin: 4rem;
`;

export const SElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
`;

export const SElementImage = styled.img`
  transform: scale(1);
  cursor: pointer;
  width: 50%;

  &:hover {
    transform: scale(1.15);
  }`;

export const SShareLogoContainer = styled.div``;

export const SShareLogo = styled.img`
  width: 2.5rem;
  transform: scale(1);
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    transform: scale(1.15);
  }
`;

