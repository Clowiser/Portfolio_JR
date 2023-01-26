import styled from "styled-components";

export const SAboutContainer = styled.div`
  margin: 1em;
`;

export const SSectionPresentationContainer = styled.div`
  text-align: center;
  margin: 0 3em;
`;

export const SPhotoContainer = styled.div`
  position: absolute;
`;

export const SAboutPhoto = styled.img`
  position: relative;
  top: -5rem;
  width: 10rem;
  border: solid 4px white;
  border-radius: 7rem;
`;

export const SParticuleBlue = styled.img`
  position: relative;
  top: -3rem;
  left: -15rem;
  width: 15rem;
  z-index: 1;
  transform: rotate(15deg);
  animation: spin 10s linear infinite;

  @keyframes spin {
    50% {
      transform: rotate(90deg);
    }
  }`;

export const SPhotoPresentationWrapper = styled.div`
  background-color: #262223;
  border-radius: 1em;
  margin: 1em 0;
  padding: 3rem;
  display: flex;
  align-items: center;
`;

export const SText = styled.div`
  color: ${props => props.theme.thirdColor};
  padding: 2rem;
  width: 80%;
  margin-left: 13rem;
`;

export const SAboutSectionCV = styled.div`
  text-align: center;
`;

export const STitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;