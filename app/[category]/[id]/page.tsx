"use client";

import { Navigator } from "@/components/navigator";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/api/data";
import { baseUrl } from "@/lib/common";
import { Base } from "@/components/common";
import Chart from "react-apexcharts";

const Wrapper = styled.div`
  .category {
    display: flex;

    .name {
      padding: 0 10px;
    }
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
        <div>Name: {name}</div>
        <div className="category">
          <div>Type:</div>
          {types.map((_) => (
            <div className="name" key={_.slot}>
              {_.type.name}
            </div>
          ))}
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
          <div>Ablities:</div>
          {abilities.map((_) => (
            <div className="name" key={_.slot}>
              {_.ability.name}
            </div>
          ))}
        </div>
        <div>
          Stats:
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
      </Wrapper>
    </>
  );
}
