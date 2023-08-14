export type Slider ={
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
    buttonText?:string
}

export type SliderProps ={
    state:Slider[]
    onActive: (slidId:number) => void
}
