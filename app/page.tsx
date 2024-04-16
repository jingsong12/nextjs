"use client";

import { Category } from "@/components/category";
import { data, result } from "@/data";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Home() {
  return (
    <Wrapper>
      {result.map(({ name, url }) => (
        <Category name={name} url={url} />
      ))}
    </Wrapper>
  );
}
