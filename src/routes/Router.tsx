import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/screens/not-found/NotFound';
import { useAuth } from '../hooks/useAuth';
import { routes } from './routes.data';

const Router: FC = () => {
	const { isAuth } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false;
					}

					return (
						<Route
							key={route.path}
							element={<route.component />}
							path={route.path}
						/>
					);
				})}
				<Route element={<NotFound />} path='*' />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
