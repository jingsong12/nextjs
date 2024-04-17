"use client";

import { Navigator } from "@/components/navigator";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/api/data";
import Chart from "react-apexcharts";
import Link from "next/link";

const Wrapper = styled.div`
  > div {
    display: flex;
    margin-top: 10px;
    align-items: center;
  }
  .category {
    display: flex;

    .name {
      padding: 0 10px;
    }
  }
  h2 {
    text-align: center;
  }
`;

export default function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { id } = params;
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPokemon(id),
    queryKey: ["pokemon"],
  });

  const { name, sprites, types, abilities, stats } = data ?? { stats: [] };

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "Stats bar",
    },
    xaxis: {
      categories: stats.map((_) => _.stat.name),
    },
  };

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    { name: "Stat", data: stats.map((_) => _.base_stat) },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <>
      <Navigator />
      <Wrapper>
        <h2>Pokemon Details</h2>
        <div>Name: {name}</div>
        <div className="category">
          <div>Category/Type:</div>
          {types.map((_) => (
            <Link
              key={_.slot}
              href={_.type.url.split("https://pokeapi.co/api/v2/type")[1]}
            >
              <div className="name">{_.type.name}</div>
            </Link>
          ))}
        </div>
        <div>
          Stats:
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
        <div>
          Sprites:
          <img src={sprites.front_default} />
        </div>
        <div>
          Home:
          <img src={sprites.other.home.front_default} />
        </div>
        <div>
          Official-artwork:
          <img src={sprites.other["official-artwork"].front_default} />
        </div>
        <div>
          Showdown:
          <img src={sprites.other.showdown.front_default} />
        </div>
        <div className="category">
          <div>Abilities:</div>
          {abilities.map((_) => (
            <div className="name" key={_.slot}>
              {_.ability.name}
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
