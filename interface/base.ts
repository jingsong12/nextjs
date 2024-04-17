export interface ICategory {
    name: string;
    url: string;
}

export interface ICategoriRes{
    count: number;
    next: string;
    results: ICategory[]
}