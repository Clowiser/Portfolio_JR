import styled from "styled-components";
import {Link} from "react-router-dom";

export const SHomeContainer = styled.div``;

export const SHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;`
;

export const SHeaderContainer = styled.div`

`;

export const SHeaderTitle = styled.h1`
  font-family: 'ChunkFive', Calibri, serif;
  text-align: center;
  letter-spacing: 0.2rem;
  width: 80%;
  color: #262223;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SPresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #262223;
  margin: auto;
`;

export const SPresentationWrapper = styled.div`
  width: 65%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SPresentationTitle = styled.h1`
  font-family: 'ChunkFive', Calibri, serif;
  letter-spacing: 0.2rem;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

export const SPresentationText = styled.div`
  margin-top: 1rem;
`;

export const SPresentationLink = styled(Link)`
  //font-family: 'ChunkFive', Calibri, serif;
  //font-size: 2rem;
  //text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;

`;

export const SImg = styled.img`
  width: 100%;
`;
