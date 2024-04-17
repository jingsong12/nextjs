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
import { useState } from "react";

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
  .search {
    display: flex;
    justify-content: center;

    input {
      margin: 20px;
    }
  }
  .category {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getCategories(),
    queryKey: ["categories"],
  });

  const { results } = data ?? {};

  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;
  return (
    <Wrapper>
      <h2>Main page</h2>
      <div className="search">
        <div>
          Search/Filter:{" "}
          <input
            value={search}
            onInput={(e) => setSearch(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="category">
        {results
          .filter(({ name }) => {
            if (search == "") {
              return true;
            }
            return name.includes(search);
          })
          .map(({ name, url }) => (
            <Base
              key={name}
              name={name}
              url={url.split(baseUrl + "/type/")[1]}
            />
          ))}
      </div>
    </Wrapper>
  );
}
