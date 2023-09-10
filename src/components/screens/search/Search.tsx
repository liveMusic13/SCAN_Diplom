import React, { FC } from 'react';
import { useBurger } from '../../../providers/BurgerContext';
import Content from '../../content/Content';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import BurgerMenu from '../../ui/burger-menu/BurgerMenu';

const Search: FC = () => {
	const arrSectionProps = ['search'];

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

export default Search;
