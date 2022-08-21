import {createGlobalStyle} from "styled-components";
import ChunkFive from "./ChunkFive/ChunkFive-Regular.otf"

const FontsStyle = createGlobalStyle`
  @font-face {

    font-family: 'ChunkFive';
    src: url(${ChunkFive}) format('opentype');
  }
`;

export default FontsStyle;
