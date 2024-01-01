export interface IBooksData {
    count: number;
    data: IBooks[];
}

export interface IBooks {
    _id?: number | string;
    title: string;
    author: string;
    publishYear: number;
}
