import IAbout from "../Models/About";
import { about as data } from "../Mocks/About";

export const about: IAbout = {
  name: data.name,
  image: data.image,
  location: data.location,
  companyAge: data.companyAge,
  openingTime: data.openingTime,
  closingTime: data.closingTime,
  texts: data.texts,
};
