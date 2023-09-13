export type Post={
    id:string;
    content:string;
    image?:string;
    likes:number;
    authot:User;
}

export type User={
    id:string;
    name:string;
    position:string;
    image?:string;
}