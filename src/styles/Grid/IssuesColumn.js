import styled from "styled-components";
import {size} from "../variables";
import MEDIA from "../mediaTemplates";

const IssuesColumn = styled.div`
  flex: 2;
  margin-right: ${size.small};

  ${MEDIA.TABLET`
    margin: 0;
  `};
`;

export default IssuesColumn;
