import styled from "styled-components";
import {Link} from "react-router-dom";

export const SNavContainer = styled.nav`
  background-color: #efefef;
  list-style-type: none;
  padding: 1rem 0;
  //box-shadow: -0.033em 1px 5px rgba(255, 0, 0, 0.67), 0.033em 1px 5px rgba(0, 255, 255, 0.67);
`;

export const SUl = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SA = styled(Link)`
  text-decoration: none;
  color: #262223;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);

  :hover {
    text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
    font-weight: bold;
  }`;

export const SFlag = styled.div`
  cursor: pointer;`;

export const SJRLogo = styled.img`
  width: 15%;
  transform: scale(1);

  &:hover {
    transform: scale(1.15);
`;

export const SFlagTranslateContainer = styled.div`
  display: flex;
  width: 8rem`;

export const SImgFlag = styled.img`
  width: 2rem`;

export const SLocalFlagContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 8%;

`;
