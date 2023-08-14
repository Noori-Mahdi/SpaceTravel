export type ButtonType = {
    id:number;
    buttonName?: string;
    active: boolean;
    onActive: (slidId:number) => void
  };

  export type ButtonsProps = {
    buttons :ButtonType[],
    onActive: (slidId:number) => void
  };