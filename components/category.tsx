import { ICategory } from "@/interface";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20vw;
  height: 20vw;
  background: 0 #866a6a;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Category = ({ name, url }: ICategory) => {
  return <Wrapper>{name}</Wrapper>;
};
