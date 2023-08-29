import React, { FC } from 'react';
import { useBurger } from '../../../providers/BurgerContext';
import Content from '../../content/Content';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import BurgerMenu from '../../ui/burger-menu/BurgerMenu';

const Home: FC = () => {
	const arrSectionProps = ['home-one', 'home-two', 'home-three'];

	const { isViewBurger } = useBurger();

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

export default Home;
