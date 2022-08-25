import styled from "styled-components";

export const SSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 4rem auto 8rem auto;
  width: 75rem;
`;

export const SSkillsWrapper = styled.div`
  width: 15rem;
  padding: 2rem;
  border-radius: 1rem;

  > h2 {
    font-family: 'ChunkFive', Calibri, serif;
    letter-spacing: 0.2rem;
    text-shadow: -0.033em 0 1px rgba(255, 0, 0, 0.67), 0.033em 0 1px rgba(0, 255, 255, 0.67);
  }
`;

export const SSkillsList = styled.li`
  list-style: none`;

export const SImgCode = styled.img``;

export const SSkillsCodeText = styled(SSkillsWrapper)`
  background-color: whitesmoke;
`;

export const SSkillsDrawText = styled(SSkillsWrapper)`
  background-color: whitesmoke;
`;

export const SImgDraw = styled.img``;
