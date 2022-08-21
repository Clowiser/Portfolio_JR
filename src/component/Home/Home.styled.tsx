import styled from "styled-components";
import {Link} from "react-router-dom";


export const SHeaderContainer = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  color: #262223;
`;

export const SHeaderTitle = styled.h3`
  font-family: 'ChunkFive', Calibri, serif;
  text-align: center;
  letter-spacing: 0.2rem;
  width: 80%;
`;

export const SPresentationContainer = styled.div`
  //background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #262223;
  //width: 80%;
  margin: auto;
  //border-radius: 1rem;
  padding-bottom: 2rem;
`;

export const SPresentationWrapper = styled.div`
  width: 65%;
  text-align: justify;
  display: flex;
  flex-direction: column;
`;

export const SPresentationTitle = styled.h1`
  font-family: 'ChunkFive', Calibri, serif;
  letter-spacing: 0.2rem;
`;

export const SPresentationText = styled.div`
  margin-top: 1rem;
`;

export const SPresentationLink = styled(Link)`
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
`;

export const SImg = styled.img`
  width: 100%`;
