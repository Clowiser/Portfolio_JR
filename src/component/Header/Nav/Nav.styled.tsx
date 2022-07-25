import styled from "styled-components";
import {Link} from "react-router-dom";

export const SNavContainer = styled.nav`
  background-color: #efefef;
  list-style-type: none;
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

export const SImg = styled.img`
  width: 50%`;

export const SFlagTranslateContainer = styled.div`
  display: flex;
  width: 8rem`;