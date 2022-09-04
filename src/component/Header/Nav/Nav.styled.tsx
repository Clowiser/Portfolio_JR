import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const SNavContainer = styled.nav`
  //background-color: #efefef;
  padding: 1.5rem 0;
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

  animation: pulsate-bck 3s ease-in-out infinite both;

  @keyframes pulsate-bck {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

`;

export const SA = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
  margin-left: 1em;
  transform: scale(1);

  &.active {
    font-weight: bold;
  }

  :hover {
    transform: scale(1.1);
  }
`;


