export type page = {
  id:number;
  active: boolean;
  namePage: string;
};

export type pagesProps = {
  page: page[];
  active:boolean
  onActive: (slidId:number) => void;
};

export type headerProps = {
  page: page[];
  onActive: (slidId:number) => void;
};
