export interface IBase {
  name: string;
  url: string;
}

export interface ICategory {
  name: string;
  url: string;
}

export interface ICategoriesRes {
  count: number;
  next: string;
  results: ICategory[];
}

export interface ICategoryDetail {
  id: string;
  name: string;
  names: {
    language: IBase;
    name: string;
  };
  pokemon: { pokemon: IBase }[];
}

interface IEffect_entries {
  effect: string;
  language: IBase;
  short_effect: string;
}

interface IFontDefault {
  front_default: string;
}
export interface IPokemon {
  name: string;
  abilities: { ability: IBase; slot: number }[];
  species: IBase;
  sprites: {
    front_default: string;
    other: {
      home: IFontDefault;
      "official-artwork": IFontDefault;
      showdown: IFontDefault;
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: IBase;
  }[];
  types: { type: IBase; slot: number }[];
}
