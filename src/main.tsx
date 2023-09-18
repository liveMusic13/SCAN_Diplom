import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import AuthProvider from './providers/AuthProvider.tsx';
import { BurgerProvider } from './providers/BurgerContext.tsx';
import Router from './routes/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <Provider store={store}>
	<AuthProvider>
		<BurgerProvider>
			<Router />
		</BurgerProvider>
	</AuthProvider>
	// </Provider>
);
