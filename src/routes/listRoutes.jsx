import LandingPage from "../pages/LandingPage/LandingPage";

export const publicRoutes = [
    { path: '/', element: <LandingPage />, title: 'Início'},
    { path: '/trilhas', element: <LandingPage />, title: 'Trilhas'},
    { path: '/historias', element: <LandingPage />, title: 'Histórias'}
];
