import React, { FC } from 'react';
import Content from '../../content/Content';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';

const Search: FC = () => {
	const arrSectionProps = ['search'];

	return (
		<Layout>
			<Header />
			<Content arrSectionProps={arrSectionProps} />
			<Footer />
		</Layout>
	);
};

export default Search;
