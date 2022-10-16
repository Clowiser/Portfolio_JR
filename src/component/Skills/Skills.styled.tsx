import styled from "styled-components";

export const SSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 4rem auto;
  width: 75rem;
`;

export const SSkillsList = styled.li`
  list-style: none;
  height: 15rem;
`;

export const SSkillsWrapper = styled.div`
  width: 15rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: whitesmoke;
`;

export const SSkillsTitle = styled.p`
  height: 7rem;
`;

export const SImg = styled.img`
  animation: pulsate-bck 4s ease-in-out infinite both;

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
  }`;
