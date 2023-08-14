export type Slid ={
    id:number;
    active:boolean;
    title1:string;
    title2?:string;
    paragraph:string;
    info1?:string;
    info2?:string;
    infoSubject1?:string;
    infoSubject2?:string;
    img:string;
}

export type SlidProps ={
    state:Slid[]
    onActive:(slidId:number) => void
} & Slid
