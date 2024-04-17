import { ICategory } from "@/interface/base";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  margin-left: 30px;
  margin-top: 10px;
`;

export const Navigator = () => {
  return (
    <Wrapper>
      <h3>{"< "}Back</h3>
    </Wrapper>
  );
};
