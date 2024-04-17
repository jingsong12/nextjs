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
  items: ICategory[];
  name: string;
  names: {
    language: IBase;
    name: string;
  };
  pocket: IBase;
}

interface IEffect_entries {
  effect: string;
  language: IBase;
  short_effect: string;
}
export interface IItem {
  attributes: IBase[];
  category: ICategory;
  cost: number;
  effect_entries: IEffect_entries[];
  flavor_text_entries: {
    language: IBase;
    text: string;
    version_group: IBase;
  }[];
  game_indices: {
    game_index: number;
    generation: IBase;
  }[];
  name: string;
  sprites: {
    default: string;
  };
}
