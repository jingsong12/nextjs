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
