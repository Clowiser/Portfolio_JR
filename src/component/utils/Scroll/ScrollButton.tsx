import styled from 'styled-components';

export const Content = styled.div`
  overflowY: scroll;
`;

export const SButton = styled.div`
  position: fixed;
  right: 0.5em;
  bottom: 1em;
  height: 0.5em;
  font-size: 2.5rem;
  z-index: 1;
  cursor: pointer;
  color: ${
          props => props.theme.secondaryColor
  };
  //filter: drop-shadow(-0.033em 0 1px rgba(255, 0, 0, 0.67))
`;