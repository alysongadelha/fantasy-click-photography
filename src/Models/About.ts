export default interface IAbout {
  name: string;
  image: string;
  location: string;
  companyAge: number;
  openingTime: number;
  closingTime: number;
  texts: IText[];
}

export interface IText {
  title: string;
  paragraph: string[];
}
