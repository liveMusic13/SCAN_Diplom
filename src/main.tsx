import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { BurgerProvider } from './components/BurgerContext.tsx';
import Router from './routes/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BurgerProvider>
			<Router />
		</BurgerProvider>
	</React.StrictMode>
);
