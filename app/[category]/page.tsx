"use client";

import { Navigator } from "@/components/navigator";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getCategoryDetail } from "@/api/data";
import { baseUrl } from "@/lib/common";
import { Base } from "@/components/common";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCategoryDetail(category),
    queryKey: ["category"],
  });

  const { pokemon, name } = data ?? {};

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
      <Navigator />
      <h2 style={{ textAlign: "center" }}>Category: {name}</h2>
      <Wrapper>
        {pokemon.map(({ pokemon }) => (
          <Base
            key={pokemon.name}
            name={pokemon.name}
            url={
              "/" + category + "/" + pokemon.url.split(baseUrl + "/pokemon/")[1]
            }
          />
        ))}
      </Wrapper>
    </>
  );
}
