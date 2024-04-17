import { ICategoriesRes, ICategoryDetail, IPokemon } from "@/interface/base";
import { baseUrl } from "@/lib/common";

const getData = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};

export const getCategories = async () => {
  const data = await getData(baseUrl + "/type/");
  return data as ICategoriesRes;
};

export const getCategoryDetail = async (id: string) => {
  const data = await getData(baseUrl + "/type/" + id);
  return data as ICategoryDetail;
};

export const getPokemon = async (id: string) => {
  const data = await getData(baseUrl + "/pokemon/" + id);
  return data as IPokemon;
};
