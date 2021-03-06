import NewsList from 'pages/news/list';
import News from 'pages/news/news'

const route =
    {
        path:"noticias",
        component:NewsList
    };

const routeOpen = {
    path:":year/:month/:day/:slug",
    component:News
}

export default route;
export const newsRoutes = route;
export const newsOpenRoutes = routeOpen;
