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
  height: 13rem;
`;

export const SSkillsLogoWrapper = styled.div`
  width: 15rem;
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

export const SSkillsLogoImg = styled.img`
  width: 5rem;
  animation: rotation 4s infinite both;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;