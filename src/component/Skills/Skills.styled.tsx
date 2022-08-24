import styled from "styled-components";
import code from "../../style/assets/img/code.png";
import draw from "../../style/assets/img/draw.png"

export const SSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 4rem auto;
  //background-color: whitesmoke;
  border-radius: 1rem;
  width: 55rem;
`;

export const SSkillsWrapper = styled.div`
  width: 23rem;
  padding: 2rem;
  border-radius: 1rem;

  > h2 {
    font-family: 'ChunkFive', Calibri, serif;
    letter-spacing: 0.2rem;
  }
`;

export const SSkillsDrawWrapper = styled(SSkillsWrapper)`
    //background-image: url(${draw});
  background-color: whitesmoke;
`;

export const SSkillsCodeWrapper = styled(SSkillsWrapper)`
    //background-image: url(${code});
  background-color: whitesmoke;
`;

export const SSkillsList = styled.li`
  list-style: none`;