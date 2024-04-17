"use client";

import { Category } from "@/components/category";
import { Navigator } from "@/components/navigator";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import getCategories from "@/api/data";
import { baseUrl } from "@/lib/common";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCategories(),
    queryKey: ["categories"],
  });

  const { results } = data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
      <Navigator />
      asdasd
    </>
  );
}
