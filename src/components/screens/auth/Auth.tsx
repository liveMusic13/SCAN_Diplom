import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useBurger } from '../../../providers/BurgerContext';
import Content from '../../content/Content';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import BurgerMenu from '../../ui/burger-menu/BurgerMenu';

const Auth: FC = () => {
	const arrSectionProps = ['auth'];

	const navigate = useNavigate();

	const { isViewBurger } = useBurger();
	const { isAuth } = useAuth();

	useEffect(() => {
		if (isAuth) navigate('/');
	}, [isAuth]);

	return (
		<>
			{isViewBurger ? (
				<BurgerMenu />
			) : (
				<Layout>
					<Header />
					<Content arrSectionProps={arrSectionProps} />
					<Footer />
				</Layout>
			)}
		</>
	);
};

export default Auth;
