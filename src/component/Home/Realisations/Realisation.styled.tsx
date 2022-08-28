import styled from "styled-components";

export const SRealisationContainer = styled.div`
  margin: 4rem;
`;

export const SRealisationTitle = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  letter-spacing: 0.2rem;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SRealisationElementWrapper = styled.div`
  display: inline-block;
`;

export const SRealisationElementContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const SRealisationElementList = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 0;
  text-align: center;
`;

export const SListUnique = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;

export const SCircleImgWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const SCircleText = styled.div`
  position: absolute;
  top: 7.5em;
  left: 7.5em;
  width: 5em;
  //opacity: 0;
  //:hover {
  //  color: red;
  //  font-size: 2em;
  //  opacity: 1;
  //  z-index: 2;
  //}
`;

export const SCircleImg = styled.img`
  width: 70%;
  margin: 2em auto;
  clip-path: ellipse(50% 50%);
  transform: scale(1);
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
    //filter: brightness(50%) blur(1px);
  }
`;
