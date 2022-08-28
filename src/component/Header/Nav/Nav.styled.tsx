import styled from "styled-components";
import {Link} from "react-router-dom";

export const SNavContainer = styled.nav`
  background-color: #efefef;
  padding: 1rem 0;
`;

export const SUl = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;

export const SAMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SALogo = styled(Link)``;

export const SJRLogo = styled.img`
  width: 15%;
  transform: scale(1);

  animation: floater 4s infinite;
  @keyframes floater {
    0% {
      transform: translateY(-5%);
      transition: ease 0.5s;
    }
    50% {
      transform: translateY(5%);
      transition: ease 0.5s;
    }
    100% {
      transform: translateY(-5%);
      transition: ease 0.5s;
    }
`;

export const SA = styled(Link)`
  text-decoration: none;
  color: #262223;
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
  margin-left: 1em;
  transform: scale(1);

  :hover {

    transform: scale(1.1);
  }
`;


