import styled from "styled-components";

export const SMessagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 8rem 0;
`;

export const SErrorMessage = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.primaryColor};
  text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
`;

