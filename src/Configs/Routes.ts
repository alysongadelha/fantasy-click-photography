import IRoute, { Routes } from "../Models/Routes";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";

const project = "FantasyClick";

const routes: IRoute[] = [
  {
    path: Routes.HOME,
    displayName: "Início",
    component: Home,
    navigation: true,
    head: {
      title: "Home",
      description: "Pagina Inicial",
      project,
    },
  },
  {
    path: Routes.SERVICES,
    displayName: "Serviços",
    component: Services,
    navigation: true,
    head: {
      title: "Service",
      description: "Pagina de Servicos",
      project,
    },
  },
  {
    path: Routes.PORTFOLIO,
    displayName: "Portifolio",
    component: Portfolio,
    navigation: true,
    head: {
      title: "Portfolio",
      description: "Pagina do Portifolio",
      project,
    },
  },
  {
    path: Routes.ABOUT,
    displayName: "Sobre Nós",
    component: About,
    navigation: true,
    head: {
      title: "About",
      description: "Sobre Nós",
      project,
    },
  },
];
export default routes;
