import LandingPage from "../pages/LandingPage/view";
import TrailsView from "../pages/Trails/view";
import DetailTrailView from "../pages/Trails/DetailTrail/view";
import WatchVideoTrailView from "../pages/Trails/WatchVideoTrail/view";
import MemoryGameView from "../pages/MemoryGame/view";

export const publicRoutes = [
    { path: '/', element: <LandingPage />, title: 'Início'},
    { path: '/trilhas', element: <TrailsView />, title: 'Trilhas'},
    { path: '/trilhas/:id', element: <DetailTrailView /> },
    { path: '/trilhas/:id/video/:idVideo', element: <WatchVideoTrailView /> },
    { path: '/historias', element: <LandingPage />, title: 'Histórias'},
    { path: '/jogodamemoria', element: <MemoryGameView />, title: 'Jogo da Memória'}
];