"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  cursor: pointer;
  margin-left: 30px;
  margin-top: 10px;
`;

export const Navigator = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <h3 onClick={router.back}>{"< "}Back</h3>
    </Wrapper>
  );
};
