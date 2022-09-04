import styled from "styled-components";

export const SAboutContainer = styled.div`
  margin: 1em;
`;

export const SAboutSectionPresentationContainer = styled.div``;

export const SAboutSectionPresentation = styled.div`
  text-align: center;
  margin: 0 3em;
`;

export const SAboutPhoto = styled.img`
  width: 20%;
  border-radius: 1em;
`;

export const SAboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SAboutTextLeft = styled.div`
  width: 80%;
  background-color: #262223;
  border-radius: 1em;
  margin: 1em 0;
  position: relative;
  left: -8em;
`;

export const SAboutTextRight = styled.div`
  width: 80%;
  background-color: #efefef;
  border-radius: 1em;
  position: relative;
  right: -8em;
`;

export const SAboutSectionCV = styled.div`
  text-align: center;
`;

export const STitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;