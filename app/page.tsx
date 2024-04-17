"use client";

import { Navigator } from "@/components/navigator";
import { data, result } from "@/data";
import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getCategories } from "@/api/data";
import { baseUrl } from "@/lib/common";
import { Base } from "@/components/common";

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
      <Wrapper>
        {results.map(({ name, url }) => (
          <Base
            key={name}
            name={name}
            url={url.split(baseUrl + "/item-category/")[1]}
          />
        ))}
      </Wrapper>
    </>
  );
}
