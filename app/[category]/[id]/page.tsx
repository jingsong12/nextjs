"use client";

import { Navigator } from "@/components/navigator";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "@/api/data";
import { baseUrl } from "@/lib/common";
import { Base } from "@/components/common";

const Wrapper = styled.div``;

export default function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { id } = params;
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getItem(id),
    queryKey: ["item"],
  });

  const { name, sprites, cost, category } = data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
      <Navigator />
      <Wrapper>
        <div>Name: {name}</div>
        <div>Cost: {cost}</div>
        <div>Category: {category.name}</div>
        <div>
          Sprites:
          <img src={sprites.default} />
        </div>
      </Wrapper>
    </>
  );
}
