import styled from "styled-components";
import {Link} from "react-router-dom";

export const SNavContainer = styled.nav`
  background-color: #efefef;
  list-style-type: none;
  padding: 1rem 0;
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

  :hover {
    color: #ff7f00;
    font-weight: bold;
  }`;

export const SFlag = styled.div`
  cursor: pointer;`;

export const SJRLogo = styled.img`
  width: 20%;
  transform: scale(1);

  &:hover {
    transform: scale(1.15);
`;

export const SFlagTranslateContainer = styled.div`
  display: flex;
  width: 8rem`;

export const SImgFlag = styled.img`
  width: 2rem`;
