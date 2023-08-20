import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';
import Result from '../components/screens/result/Result';
import Search from '../components/screens/search/Search';

interface IRoute {
	path: string;
	component: React.FC;
	isAuth: boolean;
}

export const routes: IRoute[] = [
	{
		path: '/',
		component: Home,
		isAuth: false,
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false,
	},
	{
		path: '/search',
		component: Search,
		isAuth: true,
	},
	{
		path: '/result',
		component: Result,
		isAuth: true,
	},
];
