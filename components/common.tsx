import { ICategory } from "@/interface/base";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20vw;
  height: 20vw;
  background: 0 #866a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Base = ({ name, url }: ICategory) => {
  return (
    <Link href={url}>
      <Wrapper>{name}</Wrapper>
    </Link>
  );
};
