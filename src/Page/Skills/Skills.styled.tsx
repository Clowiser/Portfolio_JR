import styled from "styled-components";

export const SSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 4rem auto;
  width: 75rem;
  align-items: center;
`;

export const SSkillsList = styled.li`
  list-style: none;
`;

export const SSkillsLogoWrapper = styled.div`
  width: 15rem;
`;

export const SSkillsWrapper = styled.div`
  width: 15rem;
  height: 25rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: whitesmoke;
`;

export const SSkillsTitle = styled.p``;

export const SSkillsLogoImg = styled.img`
  width: 5rem;
  animation: rotation 10s infinite both;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;