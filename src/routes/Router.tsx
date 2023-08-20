import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/screens/not-found/NotFound';
import { routes } from './routes.data';

const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					//TODO: make is AUTH rotes

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
