export default interface IRoutes extends Route {
  component: any;
  navigation: boolean;
  head: IHead;
}

interface IHead {
  title: string;
  description: string;
  project: string;
}

export enum Routes {
  HOME = "/",
  PORTFOLIO = "/portifolio",
  SERVICES = "/servicos",
  ABOUT = "/sobre",
}

interface Route {
  displayName: string;
  path: string;
}
