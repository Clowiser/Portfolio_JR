import styled from "styled-components";

export const SHomeContainer = styled.div``;

export const SHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const SHeaderTitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
  letter-spacing: 0.2rem;
  width: 80%;
  color: ${props => props.theme.primaryColor};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SPresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.primaryColor};
`;

export const SPresentationWrapper = styled.div`
  width: 65%;
  text-align: justify;
  margin-top: 2rem;
`;

export const SPresentationTitle = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: 0.2rem;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SPresentationText = styled.div`
  margin-top: 1rem;
`;

export const SImg = styled.img`
  width: 45%;
  animation: floating 6s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

`;

export const SSkillsComponent = styled.div``;

export const SRealisationComponent = styled.div``;
