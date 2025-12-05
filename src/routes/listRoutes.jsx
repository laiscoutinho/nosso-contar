import LandingPage from "../pages/LandingPage/view";
import TrailsView from "../pages/Trails/view";
import DetailTrailView from "../pages/Trails/DetailTrail/view";
import WatchVideoTrailView from "../pages/Trails/WatchVideoTrail/view";
import MemoryGameView from "../pages/MemoryGame/view";
import StoriesViewPage from "../pages/stories/view";
import StoryDetailView from "../pages/stories/DetailStory/view";

export const publicRoutes = [
    { path: '/', element: <LandingPage />, title: 'Início'},
    { path: '/trilhas', element: <TrailsView />, title: 'Trilhas'},
    { path: '/trilhas/:id', element: <DetailTrailView /> },
    { path: '/trilhas/:id/video/:idVideo', element: <WatchVideoTrailView /> },
    { path: '/historias', element: <StoriesViewPage />, title: 'Histórias'},
    { path: '/historias/:id', element: <StoryDetailView /> },
    //{ path: '/jogodamemoria', element: <MemoryGameView />, title: 'Jogo da Memória'}
];