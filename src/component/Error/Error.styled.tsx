import styled from "styled-components";

export const SError = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
  margin: 1rem auto;
  position: relative;
  background: #FFF;
  box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

  @keyframes shadowPulse {
    33% {
      background: #FFF;
      box-shadow: -24px 0 ${props => props.theme.redColor}, 24px 0 #FFF;
    }
    66% {
      background: ${props => props.theme.blueColor};
      box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    }
    100% {
      background: #FFF;
      box-shadow: -24px 0 #FFF, 24px 0 ${props => props.theme.redColor};
    }
  }
`;
