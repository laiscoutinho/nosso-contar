import LandingPage from "../pages/LandingPage/LandingPage";
import TrailsView from "../pages/Trails/view";

export const publicRoutes = [
    { path: '/', element: <LandingPage />, title: 'Início'},
    { path: '/trilhas', element: <TrailsView />, title: 'Trilhas'},
    { path: '/historias', element: <LandingPage />, title: 'Histórias'}
];
